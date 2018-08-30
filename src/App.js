/* eslint-disable */
import React, { Component } from 'react';
import Timer from './Timer.js'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      active: false,
      paused: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleInput(e) {
    if (!this.state.active) {
      const newState = {};
      const val = e.target.value;
      newState[e.target.name] = val.length === 1 ? `0${val}` : val;
      this.setState(newState);
    }
  }

  handleStart() {
    const {hours, minutes, seconds} = this.state;
    const tick = this.tick
    const validStart =  (hours + minutes + seconds) > 0;
    if (validStart && !this.state.active) {
      this.setState({
        active: true,
        interval: setInterval(tick, 1000)
      });
    }
  }

  tick() {
    let {hours, minutes, seconds} = this.state;
    if (seconds > 0) {
      seconds -= 1;
    } else if (minutes > 0) {
      seconds = 59;
      minutes -= 1;
    } else if (hours > 0) {
      seconds = 59;
      minutes = 59;
      hours -= 1;
    } else {
      clearInterval(this.state.interval);
      this.setState({active:false});
    }
    
    this.setState({seconds, minutes, hours});

  }

  handlePause() {
    const tick = this.tick
    if (!this.state.paused) {
      clearInterval(this.state.interval);
      this.setState({paused: true});
    } else {
      this.setState({
        paused: false,
        interval: setInterval(tick, 1000)
      });
    }
  }

  handleReset() {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      active: false,
      paused: false
    })
  }

  padNums(num) {
    return num < 10 ? `0${num}`: '' + num;
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    const [hourStr, minuteStr, secondStr] = [hours, minutes, seconds].map(this.padNums);
    const time = hourStr + ':' + minuteStr + ':' + secondStr;

    return (
      <div className="App">
        <h1>Welcome to The Timer</h1>
        <p>The interesting thing about this timer is that it is a timer.</p>
        <p>To use the timer, use it like you use all other timers.</p>
        <Timer 
          handleInput={this.handleInput}
          handleStart={this.handleStart}
          handlePause={this.handlePause}
          handleReset={this.handleReset}
          time={time}
          active={this.state.active}
        ></Timer>
      </div>
    );
  }
}

export default App;
