/* eslint-disable */
import React from 'react';

var Timer = (props) => {
  return(
    <div className="timer">
      {/* <h2>${time}</h2> */}
      <form onChange={props.handleInput}>
        <input placeholder="hrs"></input>
        <input placeholder="mins"></input>
        <input placeholder="seconds"></input>
      </form>
      {/* buttons */}
    </div>
  )
}

export default Timer;