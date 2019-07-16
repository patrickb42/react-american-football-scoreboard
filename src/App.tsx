import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import { number } from 'prop-types';

function App() {
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);

  const addPoinstToTeam = (
    teamScore: number,
    teamScoreSetter: React.Dispatch<React.SetStateAction<number>>,
    points: number,
  ) => () => teamScoreSetter(teamScore + points);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown"
              onClick={addPoinstToTeam(lionsScore, setLionsScore, 7)}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal"
              onClick={addPoinstToTeam(lionsScore, setLionsScore, 3)}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"
              onClick={addPoinstToTeam(tigersScore, setTigersScore, 7)}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal"
              onClick={addPoinstToTeam(tigersScore, setTigersScore, 3)}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
