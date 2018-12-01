import React, { Component } from 'react';
import './App.css';
import * as timer from './Timer';


class App extends Component {

  state = {
    sessionLength: 25,
    breakLength: 5,
    running: false,
    timer: 1500,
    timerType: 'session'
  }

  incrementSessionLength() {
    const { sessionLength, timer } = this.state
    if (this.state.timerType === 'session') {
      if (!this.state.running) {
        if (sessionLength < 30) {
          this.setState({
            sessionLength: sessionLength + 1,
            timer: (sessionLength * 60) + 60
          })
        }
      }
    }
  }

  decrementSessionLength() {
    const { sessionLength, timer } = this.state
    if (this.state.timerType === 'session') {
      if (!this.state.running) {
        if (sessionLength > 1) {
          this.setState({
            sessionLength: sessionLength - 1,
            timer: sessionLength * 60 - 60
          })
        }
      }
    }
  }

  incrementBreakLength() {
    const { breakLength, timer } = this.state
    if (this.state.timerType === 'break') {
      if (!this.state.running) {
        if (breakLength < 5) {
          this.setState({
            breakLength: breakLength + 1,
            timer: breakLength * 60 + 60
          })
        }
      }
    }
  }

  decrementBreakLength() {
    const { breakLength, timer } = this.state
    if (this.state.timerType === 'break') {
      if (!this.state.running) {
        if (breakLength > 1) {
          this.setState({
            breakLength: breakLength - 1,
            timer: breakLength * 60 - 60
          })
        }
      }
    }
  }

  minutes() {
    const { timer } = this.state
    let minutes = Math.floor(timer / 60)
    let seconds = timer - minutes * 60
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  switchTimer() {
    const { timer, timerType } = this.state
      this.setState({
        timerType: timerType === 'session' ?  'break':'session'
      })
    }
  


  start_stop() {
    if (this.state.timer === 0) {
      console.log('zerio')
      this.setState({
        running: false,
        timer: this.state.timer
      })

    } else if (!this.state.running) {

      this.interval = setInterval(() => {
        this.setState({
          timer: this.state.timer - 1,
          running: true
        })
      }, 10)
    }
    else {
      this.setState({
        running: false,
        timer: this.state.timer
      })
      clearInterval(this.interval)

      console.log('starting')
    }
  }
  reset() {
    const { breakLength, sessionLength } = this.state
    clearInterval(this.interval)
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      running: false
    })

  }


  render() {
    const { sessionLength, timer, breakLength } = this.state
    return (

      <div className="App">
        <div id="container">

          <h1 id='title'>Pomodoro Clock</h1>
          <div id="topWrapper">
            <pre>{JSON.stringify(this.state)}</pre>
            <div id="labels">
              <h3 id='break-label'>BREAK LENGTH</h3>
              <h3 id='session-label'>SESSION LENGTH</h3>
            </div>
            <div id="controls">
              <button id='break-increment' onClick={() => this.incrementBreakLength()}>i</button>
              <button id='session-increment' onClick={() => this.incrementSessionLength()}>i</button>
              <button id='break-decrement' onClick={() => this.decrementBreakLength()}>d</button>
              <button id='session-decrement' onClick={() => this.decrementSessionLength()}>d</button>
              <button id='switch' onClick={() => this.switchTimer()}>sw</button>
              <div id="session-length">{sessionLength}</div>
              <div id="break-length">{breakLength}</div>
            </div>
          </div>
          <div className="timerWrapper" id='start_stop' onClick={() => this.start_stop()}>
            <div id="timer">
              <div id="timer-label">SESSION</div>
              <div id="time-left">{this.minutes()}</div>

            </div>
          </div>
          <div id="timer-control"></div>
          <button id='reset' onClick={() => this.reset()}>reset</button>

        </div>
      </div>
    );
  }
}

export default App;
