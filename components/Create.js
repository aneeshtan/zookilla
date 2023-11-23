import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { hri } from 'human-readable-ids';

import { Button, StyledInput, FlexColumn, FlexContainer } from './StyledComponents'
import { socket } from '../constants/websocket'

const FormContainer = styled.div`
  max-width: 500px;
  max-height: 80vh; // Maximum height, adjust as needed
  margin: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto; // Enable vertical scrolling
`;

const MultiSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  box-sizing: border-box;
  height: 200px; // Adjust height as needed
  overflow-y: auto;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  box-sizing: border-box;
`;
const CheckBoxContainer = styled.div`
  margin: 0 20px 20px 0;
`

const Create = ({ cancel, setGameData, setGamePlaying }) => {
  const [name, setName] = useState('');
  const [rounds, setRounds] = useState("5");
  const [scoringType, setScoringType] = useState("ai");
  const [categories, setCategories] = useState({
    Name: true,
    Place: true,
    Animal: true,
    Thing: true,
    Songs: false,
    Movies: false,
    "TV shows": false,
    Fruits: false,
    //Vegetables: false,
    Books: false,
    //Subjects: false,
    Celebrities: false,
    Musicians: false,
    Instruments: false
  })

  const generateRandomCode = (length) => {
    let code = '';
    for (let i = 0; i < length; i++) {
        code += Math.floor(Math.random() * 10); // Generate a random digit
    }
    return code;
  }

  // Monzo easter egg
  useEffect(() => {
    if (name === "Monzo") {
      setCategories(Object.assign({}, categories, {
        "Office Dog Breeds": false,
        "Meeting Rooms": false,
        "Badge Types": false,
        "Activity Types": false,
        "Engineers": false,
        "Data Scientists": false
      }))
    }

  }, [name])

  const categoriesArray = Object.keys(categories);

  const options = ["5", "7", "10"]
  const gameData = {
    name, isAdmin: true
  }

  const handleCreateGame = (code) => {
    let cats = [];
    categoriesArray.forEach(cat => {
      if (categories[cat]) cats.push(cat);
    });

    socket.emit('create', { name, code, rounds, categories: cats, scoringType }, ({ error, users }) => {
      if (error) {
         
        alert(error);
      } else {
        gameData.code = code;
        gameData.users = users;
        gameData.maxRounds = Number(rounds);
        gameData.categories = cats;
        setGameData(gameData)
        setGamePlaying(true)
      }
    });
  }

  let disabled = !name || !checkAtleastOneSelected(categoriesArray, categories)
  const [selectedCategories, setSelectedCategories] = useState([]);
  useEffect(() => {
    const defaultSelected = Object.keys(categories).filter(cat => categories[cat]);
    setSelectedCategories(defaultSelected);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <FormContainer>
      <form>
        <FlexColumn>
          <p>
            <label htmlFor="name">Your Name:</label>
            <StyledInput maxLength="15" name="name" type="text" onChange={(event) => setName(event.target.value)} />
          </p>
          <h2>Number of rounds:</h2>
          <FlexContainer>
            {options.map(option => <CheckBoxContainer key={option}>
              <input type="radio" id={option} name="rounds" value={option} onChange={(event) => setRounds(event.target.value)} checked={rounds === option} />
              <label htmlFor={option}>{option}</label>
            </CheckBoxContainer>)}
          </FlexContainer>
          <h2>Select categories:</h2>
          <FlexContainer style={{ maxWidth: "450px" }}>
              <MultiSelect multiple value={selectedCategories} onChange={(event) => {
                const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
                setSelectedCategories(selectedOptions);
              }}>
                {Object.keys(categories).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </MultiSelect>
            </FlexContainer>
          <FlexContainer>
            <Select
              value={scoringType}
              onChange={(event) => setScoringType(event.target.value)}
            >
              <option value="cross">Score Each Other</option>
              <option value="self">Score Yourself</option>
              <option value="ai">Score by AI</option>
            </Select>
          </FlexContainer>
          <Button disabled={disabled} fontSize="25px" padding="15px" minWidth="220px" onClick={(event) => {

            event.preventDefault()
            //let code = hri.random();
            let code = generateRandomCode(4); // Use your custom function here

            handleCreateGame(code);
          }}>Create Room</Button>
        </FlexColumn>
        <Button fontSize="25px" padding="15px" minWidth="220px" onClick={() => cancel()}>Cancel</Button>
      </form>
    </FormContainer>
  )
}


const checkAtleastOneSelected = (categoriesList, categories) => {
  let enableButton = false;
  categoriesList.forEach(category => {
    if (categories[category]) {
      enableButton = true;
    }
  })
  return enableButton
}

export default Create