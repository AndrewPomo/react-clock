/* eslint-disable */
import React from 'react';

var Timer = (props) => {
  if (props.active === true) {
    return(
      <div className="timer">
        <h2>{props.time}</h2>
        <button onClick={props.handlePlayPause}>Play/Pause</button>
        <button>Reset</button>
      </div>
    )

  } else {
    return(
      <div className="timer">
        <form onChange={props.handleInput}>
          <input maxLength="2" placeholder="hrs" name="hours"></input>
          <input maxLength="2" placeholder="mins" name="minutes"></input>
          <input maxLength="2" placeholder="seconds" name="seconds"></input>
        </form>
        <button onClick={props.handleStart}>Start</button>
      </div>
    )
  }
}

export default Timer;