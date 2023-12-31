import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 15px;
  @media(max-width: 500px) {

  }
`

const TimerValue = styled.span`
  position: relative;
  top: 48px;
`

const TimerContainer = styled.div`
  background-image: url('/assets/timer.png');
  height: 100px;
  background-size: 100px;
  width: 100px;
  text-align: center;
  font-size: 1.3em;
`

const RoundContainer = styled.div`
  font-size: 1.8em;
  position: relative;
  top: 30px;
  @media(max-width: 500px) {
    font-size: 1em;
  }
  display: flex;
  flex-direction: column;
`

const BoldContent = styled.span`
  color: red;
  font-weight: bold;
  font-size: 1.2em;
`
export const HelpIcon = styled.div`
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: #007bff; /* Blue background */
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 40px; /* Vertically center the question mark */
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Optional: adds shadow for depth */
`;

let tickingSound;

const GameHeader = ({ roundNumber, timerValue, currentAlphabet, maxRounds, soundOn }) => {
  useEffect(() => {
    tickingSound = new Audio('/assets/audio/ticking-timer.wav');

    tickingSound.load()
    return function cleanup() {
      pauseAudio(tickingSound)
    };
  }, []);

  if (tickingSound && timerValue === 110 && soundOn) {
    playAudio(tickingSound)
  }

  if (!soundOn || timerValue === 120) {
    pauseAudio(tickingSound)
  }

  return <Container>
    <RoundContainer>
      <span>Round <BoldContent>{`#${roundNumber}/${maxRounds}`}</BoldContent></span>
      <span>Current Alphabet: <BoldContent>{currentAlphabet || 'Not Selected'}</BoldContent></span>
    </RoundContainer>
    <TimerContainer><TimerValue>{timerValue}</TimerValue></TimerContainer>
  </Container>
}

const playAudio = (audio) => {
  const audioPromise = audio.play()
  if (audioPromise !== undefined) {
    audioPromise
      .then(_ => {
        // autoplay started
      })
      .catch(err => {
        // catch dom exception
        console.info(err)
      })
  }
}

const pauseAudio = (audio) => {
  const audioPromise = audio.pause()
  if (audioPromise !== undefined) {
    audioPromise
      .then(_ => {
        audio.load()
      })
      .catch(err => {
        // catch dom exception
        console.info(err)
      })
  }
}

export default GameHeader;