import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Spinner, FlexColumn, FlexContainer } from '../StyledComponents'
import theme from '../../constants/theme'
import { socket } from '../../constants/websocket'
import Papa from 'papaparse';

const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const Paper = styled.div`
  background: white;
  background-size: 100% 1.2em;
  height: auto;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: #9e9e9e63 6px 7px 14px 0px;
  width: 250px;
  padding: 30px 30px 30px 30px;
  background-image:
  linear-gradient(90deg, transparent 49px, transparent 49px, transparent 51px, transparent 51px),
  linear-gradient(#eee .1em, transparent .1em);
`

const Submission = styled.span`
  color: ${theme.colors.blue};
  word-break: break-all;
`

const StyledIncrementButton = styled.button`
  font-weight: bold;
  font-size: 14px;
  border: ${props => props.disabled ? '1px solid gray' : '1px solid black'};
  color: ${props => props.disabled ? 'gray' : 'black'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`

const InputContainer = styled.div`
  margin-left: 15px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  width: 80px;
  justify-content: space-between;
`

const NumberContainer = styled.div`
  margin-left: 15px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  width: 80px;
  justify-content: center;
`

const ResultsTable = ({ gameState, round, handleSubmitScore, scoreSubmitted, scorePartner }) => {
  let initialScore = {}
  const [scores, setScores] = useState({});
  const [loading, setLoading] = useState(true);
  const categories = gameState.categories;
  const currentAlphabet = gameState.currentAlphabet;
  let scoringId = gameState.scoringType === "cross" ? scorePartner.id : socket.id;
  let users = sortUserList([...gameState.users], scoringId);

  users.forEach(user => {
    categories.forEach(cat => {
      let similar = similarityCheck(cat, users, user.id, round)
      if (user.id === scoringId && similar.value) {

        initialScore = Object.assign({}, initialScore, { [cat]: 5 })
      }
    })
  })

  const [currentScore, setCurrentScore] = useState(initialScore);
 
  const [gameData, setGameData] = useState({
    currentScore: initialScore,
    animalsSet: new Set(),
    namesSet: new Set(),
    thingsSet: new Set(),
    placesSet: new Set(),
    
    booksSet: new Set(),
    celebritiesSet: new Set(),
    fruitsSet: new Set(),
    instrumentsSet: new Set(),
    moviesSet: new Set(),
    musiciansSet: new Set(),
    songsSet: new Set(),
    tv_showsSet: new Set(),
    musiciansSet: new Set(),



  });
  const parseCSV = async (filePath) => {
    const response = await fetch(filePath);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value);
    return new Promise((resolve, reject) => {
      Papa.parse(csv, {
        complete: (results) => {
          resolve(results.data.map(row => row[0]));
        },
        error: reject
      });
    });
  };

  useEffect(() => {
    const categories = ['animals', 'places', 'names', 'things', 'books', 'songs', 'tv_shows', 'movies', 'instruments', 'musicians', 'fruits'];
    
    const categoryPromises = categories.map(category =>
      parseCSV(`/csv/${category}.csv`).then(data => ({
        [`${category}Set`]: new Set(data.map(item => item.toLowerCase().trim()))
      }))
    );
  
    Promise.all(categoryPromises).then(results => {
      const newGameData = results.reduce((acc, currentSet) => {
        return { ...acc, ...currentSet };
      }, {});
  
      setGameData(prevGameData => ({
        ...prevGameData,
        ...newGameData
      }));
    });
  }, []);

  useEffect(() => {
    if(gameState.scoringType === "ai" && gameData.animalsSet.size > 0) {
      scoreEntriesAI();
    }
  }, [gameState, round, gameData.animalsSet, gameData.namesSet, gameData.thingsSet, gameData.placesSet]); // Add animalsSet as a dependency
  


  const scoreEntriesAI = async () => {

    if (gameData.animalsSet.size === 0) {
      console.log("Waiting for animalsSet to be populated...");
      return; // Exit if animalsSet is not ready
    }

    const newScores = {};
    for (const category of categories) {
      for (const user of gameState.users) {
        const answer = user.responses[round][category];
        if (answer) {
          const score = await getScoreFromAPI(category, answer);
          newScores[user.id] = { ...(newScores[user.id] || {}), [category]: score };
        }
      }
    }
    setScores(newScores);
    setLoading(false);
  };


  const getScoreFromAPI = async (category, answer,gameState) => {
    try {
        const formattedAnswer = answer.toLowerCase().trim();
        const categorySets = {
          Animal: gameData.animalsSet,
          Name: gameData.namesSet,
          Thing: gameData.thingsSet,
          Place: gameData.placesSet,
          Songs: gameData.songsSet,
          TV_shows: gameData.tv_showsSet,
          Books: gameData.booksSet,
          Celebrities: gameData.celebritiesSet,
          Musicians: gameData.musiciansSet,
          Instruments: gameData.instrumentsSet,
        };
        
        let categorySet = categorySets[category] || new Set();

        let isExactMatch = false;
        let isSimilarMatch = false;

        categorySet.forEach(item => {
            if (formattedAnswer === item) {
                isExactMatch = true;
            } else if (formattedAnswer.includes(item) || item.includes(formattedAnswer)) {
                isSimilarMatch = true;
            }
        });
        //console.log(currentAlphabet);
        if (!formattedAnswer.startsWith(currentAlphabet.toLowerCase())) {
          console.log(`'${formattedAnswer}' does not start with the round letter '${currentAlphabet}'.`);
          return -3; // Deduct points if it doesn't start with the round letter
        }


        if (isExactMatch) {
            console.log(`'${formattedAnswer}' is an exact match in ${category}.`);
            return 10; // Exact match
        } else if (isSimilarMatch) {
            console.log(`'${formattedAnswer}' is a similar match in ${category}.`);
            return 5; // Similar match
        } else {
            console.log(`'${formattedAnswer}' is not found in the ${category} set.`);
        }

        return 0; // Answer is incorrect or not in the category
    } catch (error) {
        console.error("Error checking answer:", error);
        return 0;
    }
};

const sumAllScores = (scores) => Object.keys(scores).map(cat => scores[cat]).reduce((a, b) => a + b, 0)


  let totalScore = 0;

  if (gameState.scoringType === "ai") {
    totalScore = gameState.users.reduce((total, user) => {
      return total + sumAllScores(scores[user.id] || {});
    }, 0);

    totalScore = totalScore < 0 ? 0 : totalScore; // Set totalScore to zero if it's negative

  }




  if (loading) {
    return <Spinner />;
  }

  return <>

{gameState.scoringType === "ai" ? ( 
  <TableContainer>
  {gameState.users.map(user => (
    <Paper key={user.id}>
      <h2>{user.name}</h2>
      {gameState.categories.map(category => (
        <div key={category}>
          {category}: <Submission>{user.responses[round][category] || '-'}</Submission>
          <span> Score: {scores[user.id] && scores[user.id][category]}</span>
        </div>
      ))}
      <h3 style={{ 'text-align': 'center' }} >Total Score: {Object.values(scores[user.id] || {}).reduce((a, b) => a + b, 0)}</h3>
    </Paper>
  ))}
</TableContainer>
    ) : (
      <>
    {gameState.scoringType === "cross" ? <FlexContainer><h1>You are scoring for <Submission>{scorePartner.name}</Submission>!</h1></FlexContainer> : false}
    <TableContainer>
      {users.map(user => <Paper key={user.id}>
        <h2 style={{ display: 'flex', justifyContent: 'space-between' }}><span>{user.name}</span>
          {user.id === scoringId ? <span>Score</span> : false}
        </h2>
        {categories.map(category => {
          let similar = similarityCheck(category, users, user.id, round)
          let selfScoreCard = user.id === scoringId;
          return <React.Fragment key={category}>
            {similar.value && selfScoreCard ? <span style={{ color: theme.colors.red }}>{scorePartner.name || 'You'} and {similar.name} put down the same word for {category}</span> : false}
            <div style={{ marginBottom: '10px', display: "flex", justifyContent: 'space-between', alignItems: 'center' }} key={category}>
              <div style={{ width: selfScoreCard ? "150px" : "auto", fontSize: "1.2em" }}>
                {category}:{`  `} <Submission>{user.responses[round][category] || '-'}</Submission>
              </div>
              {selfScoreCard ?
                user.responses[round][category] ? <InputContainer>
                  <NumberInput category={category} setCurrentScore={setCurrentScore} currentScore={currentScore} value={similar.value ? 5 : 0} /> </InputContainer> : <NumberContainer>0</NumberContainer>
                : ''}
            </div>
          </React.Fragment>
        }
        )}
        {user.id === scoringId ? <h2>{`Total Score: ${sumAllScores(currentScore)}`}</h2> : false}
      </Paper>)}
    </TableContainer>
    </>
    )}
    <Container>
    
      {!scoreSubmitted ? <>
        <Button onClick={(event) => {
          event.preventDefault()
          handleSubmitScore(totalScore, scoringId)
        }}>Go Next!</Button>
      </> : <FlexColumn>
          <h2>Waiting for others</h2>
          <Spinner />
        </FlexColumn>}
    </Container>
  </>
  
}

const similarityCheck = (category, users, currentUserId, round) => {
  let currentUser = users.find(user => user.id === currentUserId);
  let currentUserResponse = currentUser.responses[round][category] ? currentUser.responses[round][category].toLowerCase().trim() : null;

  let value = false;
  let name = null;
  users.filter(user => user.id !== currentUserId).forEach(user => {
    let otherResponse = user.responses[round][category] ? user.responses[round][category].toLowerCase().trim() : null;
    if (currentUserResponse && otherResponse && (currentUserResponse === otherResponse)) {
      value = true;
      name = user.name
    }
    return;
  })
  return { value, name };
}


const NumberInput = ({ value, currentScore, setCurrentScore, category }) => {
  const [numberValue, setNumberValue] = useState(value)
  useEffect(() => {
    setCurrentScore(Object.assign({}, currentScore, { [category]: value }))
  }, [])

  const onMinus = () => {
    setCurrentScore(Object.assign({}, currentScore, { [category]: numberValue - 5 }))
    if (!(numberValue <= 0)) setNumberValue(numberValue - 5)
  }

  const onPlus = () => {
    setCurrentScore(Object.assign({}, currentScore, { [category]: numberValue + 5 }))
    if (!(numberValue >= 10)) setNumberValue(numberValue + 5)
  }
  return <><StyledIncrementButton disabled={numberValue === 0} onClick={() => onMinus()}>-</StyledIncrementButton>{numberValue}<StyledIncrementButton disabled={numberValue === 10} onClick={() => onPlus()}>+</StyledIncrementButton></>
}


const sortUserList = (users, scoringId) => {
  let index = users.findIndex(user => user.id === scoringId);
  if (index != -1) {
    let first = users.splice(index, 1)[0];
    users.unshift(first);
    return users;
  }
  return users
}


export default ResultsTable;