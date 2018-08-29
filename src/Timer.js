/* eslint-disable */
import React from 'react';

var Timer = (props) => {
  return(
    <div className="timer">
      <h2>{props.time}</h2>
      <form onChange={props.handleInput}>
        <input maxLength="2" placeholder="hrs" name="hours"></input>
        <input maxLength="2" placeholder="mins" name="minutes"></input>
        <input maxLength="2" placeholder="seconds" name="seconds"></input>
      </form>
      <button onClick={props.handleStart}>Start</button>
    </div>
  )
}

export default Timer;