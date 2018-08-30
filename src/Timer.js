/* eslint-disable */
import React from 'react';

var Timer = ({handleInput, handleStart, handlePause, handleReset, time, active}) => {
  if (active === true) {
    return(
      <div className="timer">
        <h2>{time}</h2>
        <button onClick={handlePause}>Pause/Resume</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    )
  } else {
    return(
      <div className="timer">
        <form onChange={handleInput}>
          <input maxLength="2" placeholder="hours" name="hours"></input>
          <input maxLength="2" placeholder="minutes" name="minutes"></input>
          <input maxLength="2" placeholder="seconds" name="seconds"></input>
        </form>
        <button onClick={handleStart}>Start</button>
      </div>
    )
  }
}

export default Timer;