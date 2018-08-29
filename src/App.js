/* eslint-disable */
import React, { Component } from 'react';
import Timer from './Timer.js'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: '00',
      minutes: '00',
      seconds: '00'
    };

    this.handleInput = this.handleInput.bind(this);
    // this.handlePause = this.handleSSN.bind(this);
    // this.handleReset = this.handleReset.bind(this);
    // this.handleStart = this.handleTick.bind(this);
  }



  handleInput(e) {
    // allow user to input their desired countdown time
    const newState = {};
    const val = e.target.value;
    newState[e.target.name] = val.length === 1 ? `0${val}` : `${val}`;
    this.setState(newState);
  }

  // handleStart
  // start timer

  // handlePause
  // allow user to pause timer

  // handleClear
  // allow user to clear counter to zero

  

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Timer</h1>
        <p>The interesting thing about this timer is that it is a timer.</p>
        <p>To use the timer, use it like you use all other timers.</p>
        <Timer 
          handleInput={this.handleInput}
          time={`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`}
        ></Timer>
      </div>
    );
  }
}

export default App;
