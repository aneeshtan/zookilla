import React from 'react';
import { ExitButton, ExitButtonContainer, Button } from './StyledComponents';
import styled from 'styled-components';
import theme from '../constants/theme';

const InstructionHeader = styled.h1`
  color: ${theme.colors.red}
`;

const PaddedContainer = styled.div`
  padding: 0 50px 0 50px;
`;

const Instructions = ({ cancel }) => (
  <>
    <ExitButtonContainer>
      <ExitButton onClick={() => cancel()}>X</ExitButton>
    </ExitButtonContainer>
    <div>
      <PaddedContainer>
        <InstructionHeader>Learn English While You Play</InstructionHeader>
        <h3>
          This game is designed for fun and educational purposes, helping players to improve their English vocabulary. Players will interact with a variety of words including verbs, adjectives, nouns, and more.
        </h3>
      </PaddedContainer>
      <PaddedContainer>
        <InstructionHeader>How To Play</InstructionHeader>
        <h3>
          The game creator sets the number of rounds and chooses the word categories. Each round, players get a new alphabet and must think of words beginning with that letter fitting the categories.
          <br />
          Each game round is timed at 300 seconds. The round ends as soon as the first person submits their response. Think fast!
        </h3>
      </PaddedContainer>
      <PaddedContainer>
        <InstructionHeader>Creating A Game and Game Setup</InstructionHeader>
        <h3>Create a new game in the "Create New Game" section. Specify the number of rounds and additional categories. You can also define scoring mechanics: "Score Yourself" or "Score Each Other". Share the "Game Code" with friends to join.</h3>
      </PaddedContainer>
      <PaddedContainer>
        <InstructionHeader>Scoring Rules</InstructionHeader>
        <h3>Scoring Rules:
          <ul>
            <li>+10 points for each unique answer</li>
            <li>+5 points for each non-unique answer</li>
            <li>-3 points for irrelevant or nonsensical answers</li>
            <li>+0 points for no answer</li>
          </ul>
        </h3>
      </PaddedContainer>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Button fontSize="25px" padding="15px" minWidth="220px" onClick={(event) => {
          event.preventDefault();
          cancel(false);
        }}
        >Understood, Let's Go!</Button>
      </div>
    </div>
  </>
);

export default Instructions;
