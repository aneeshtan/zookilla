import React, { useState } from 'react';

import Join from './Join';
import Create from './Create';
import Play from './Game/Play';
import Instructions from './Instructions'

const Landing = () => {
  const [showInstructions, toggleInstructions] = useState(false);
  const [showJoinForm, toggleJoinForm] = useState(false);
  const [showCreateForm, toggleCreateForm] = useState(false);
  const [isGamePlaying, setGamePlaying] = useState(false);
  const [gameData, setGameData] = useState({});
  const [soundOn, toggleSound] = useState(true);

  return (
    <div className="container-fluid">
      <div className="text-center mt-5 mb-4">
        <h1 className="display-4">Zookilla</h1>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="card bg-light text-dark mb-3">
          <div className="card-body">
            {isGamePlaying ? (
              <Play soundOn={soundOn} setGamePlaying={setGamePlaying} gameData={gameData} />
            ) : showInstructions ? (
              <Instructions cancel={toggleInstructions} />
            ) : (
              <>
                {!showJoinForm && !showCreateForm && (
                  <div>
                    <button className="btn btn-primary my-2" onClick={() => toggleInstructions(true)}>
                      How To Play
                    </button>
                    <button className="btn btn-primary my-2" onClick={() => {
                      toggleJoinForm(true);
                      toggleCreateForm(false);
                    }}>
                      Join Existing Game
                    </button>
                    <button className="btn btn-primary my-2" onClick={() => {
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
      </div>
      {/* Additional components or footer */}
    </div>
  );
};

export default Landing;