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
      seconds: '00',
      active: false,
      paused: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    // this.handleReset = this.handleReset.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleInput(e) {
    // allow user to input their desired countdown time
    if (this.state.active === false) {
      const newState = {};
      const val = e.target.value;
      newState[e.target.name] = val.length === 1 ? `0${val}` : val;
      this.setState(newState);
    }
  }

  handleStart() {
    const hours = parseInt(this.state.hours);
    const minutes = parseInt(this.state.minutes);
    const seconds = parseInt(this.state.seconds);
    const tick = this.tick
    const validStart =  hours + minutes + seconds > 0;
    if (validStart && this.state.active === false) {
      this.setState({
        active: true,
        interval: setInterval(tick, 1000)
      });
    }
  }

  tick() {
    let seconds = parseInt(this.state.seconds);
    let minutes = parseInt(this.state.minutes);
    let hours = parseInt(this.state.hours);
    // if there 
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

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;
    
    this.setState({seconds, minutes, hours});

  }

  handlePlayPause() {
    const tick = this.tick
    if (this.state.paused === false) {
      clearInterval(this.state.interval);
      this.setState({paused: true});
    } else {
      this.setState({
        paused: true,
        interval: setInterval(tick, 1000)
      });
    }
  }

  // handleReset

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Timer</h1>
        <p>The interesting thing about this timer is that it is a timer.</p>
        <p>To use the timer, use it like you use all other timers.</p>
        <Timer 
          handleInput={this.handleInput}
          handleStart={this.handleStart}
          handlePlayPause={this.handlePlayPause}
          time={`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`}
          active={this.state.active}
        ></Timer>
      </div>
    );
  }
}

export default App;
