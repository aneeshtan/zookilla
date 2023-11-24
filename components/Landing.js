import React, { useState } from 'react';

import Join from './Join';
import Create from './Create';
import Play from './Game/Play';
import Instructions from './Instructions';
import { HelpIcon } from './Game/GameHeader'; // Adjust the path as per your folder structure

const Landing = () => {
  const [showJoinForm, toggleJoinForm] = useState(false);
  const [showCreateForm, toggleCreateForm] = useState(false);
  const [showInstructions, toggleInstructions] = useState(false);
  const [isGamePlaying, setGamePlaying] = useState(false);
  const [gameData, setGameData] = useState({});
  const [soundOn, toggleSound] = useState(true);

  return (
    <div className="container-fluid" >
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="card text-dark mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <div className="card-body" >
            {isGamePlaying ? (
              <Play soundOn={soundOn} setGamePlaying={setGamePlaying} gameData={gameData} />
            ) : showInstructions ? (
              <Instructions cancel={() => toggleInstructions(false)} />
            ) : (
              <>
                {!showJoinForm && !showCreateForm && (
                  <div className="button-container d-flex flex-row justify-content-center">
  <button className="btn btn-success my-3 mx-2" onClick={() => {
    toggleJoinForm(true); 
    toggleCreateForm(false);
  }}>
    Join Existing Game
  </button>
  <button className="btn btn-danger my-3 mx-2" onClick={() => {
    toggleJoinForm(false);
    toggleCreateForm(true);
  }}>
    Create New Game
  </button>
</div>
                )}
                {showJoinForm && <Join cancel={toggleJoinForm} setGamePlaying={setGamePlaying} setGameData={setGameData} />}
                {showCreateForm && <Create setGamePlaying={setGamePlaying} setGameData={setGameData} cancel={toggleCreateForm} />}
              </>
            )}
          </div>
        </div>
        <HelpIcon onClick={() => toggleInstructions(true)}>
        ?
      </HelpIcon>


      </div>
      {/* Additional components or footer */}
    </div>
  );
};

export default Landing;