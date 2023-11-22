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
    <div className="container-fluid">
      <div className="text-center mt-5 mb-4"> 
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="card bg-light text-dark mb-3">
          <div className="card-body">
            {isGamePlaying ? (
              <Play soundOn={soundOn} setGamePlaying={setGamePlaying} gameData={gameData} />
            ) : showInstructions ? (
              <Instructions cancel={() => toggleInstructions(false)} />
            ) : (
              <>
                {!showJoinForm && !showCreateForm && (
                  <div className="button-container">
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
