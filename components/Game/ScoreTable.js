import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, FlexContainer, Spinner, FlexColumn } from '../StyledComponents'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  font-size: 1.5em;
  max-height: 80vh; // Maximum height, adjust as needed
  margin: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto; // Enable vertical scrolling
`

const ScoreTable = ({ maxRounds, gameState, round, handleStartNextRound }) => {
  const [playerReady, setPlayerReady] = useState(false)
  return <><Container>
    {gameState.users.map(user => <div key={user.id}>
      <h3>{user.name}</h3>
      <p>{user.scores[round]}</p>
    </div>)}
  </Container>
    <FlexContainer>
      {playerReady ? <>
        <FlexColumn>
          <h2>Waiting for others</h2>
          <Spinner />
        </FlexColumn>
      </> : <Button onClick={() => {
        setPlayerReady(true)
        handleStartNextRound()
      }}>{round === maxRounds ? 'See Final Scores 🤩' : 'Start Next Round'}</Button>}
    </FlexContainer>
  </>
}

export default ScoreTable;