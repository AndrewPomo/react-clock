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
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  // handlePause
  // allow user to pause timer

  // handleClear
  // allow user to clear counter to zero

  // handleStart
  // start timer

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Timer</h1>
        <p>To use the timer, you use it like you use all other timers.</p>
        <Timer 
          handleInput={this.handleInput}
        ></Timer>
      </div>
    );
  }
}

export default App;
