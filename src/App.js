import React, { Component } from 'react';
import './App.css';
import * as timer from './Timer';


class App extends Component {
  
  state = {
		sessionLength: 25,
		breakLength: 5,
    running: false,
    secondsElapsed: 0,
    timer: 1500
	}
	
  incrementSessionLength(){
    const { sessionLength } = this.state
    if (sessionLength < 30) {
		this.setState({
			sessionLength: sessionLength + 1
		})
    }
  }

	decrementSessionLength(){
    const { sessionLength } = this.state
    if (sessionLength > 1) {
		this.setState({
			sessionLength: sessionLength - 1
		})
    }
  }

	incrementBreakLength(){
    let { breakLength } = this.state
    if (breakLength < 5) {
		this.setState({
			breakLength: breakLength + 1
		})
    }
  }

  decrementBreakLength(){
    const { breakLength } = this.state
    if (breakLength > 1) {
		this.setState({
			breakLength: breakLength - 1
		})
		}
  }

  start(){

    console.log('start')
    setInterval(() => {
        this.setState({
            timer: this.state.timer - 1,
            running: true
        })
    }, 1000)
}
  
componentDidMount() {
    
}
componentWillUnmount() {
    clearInterval(this.interval)
}

  switchTimer() {

  }
  stop(){
    
  }
  start_stop(){
    if (this.state.running) {
      this.setState({
        running: false,
        timer: this.state.timer
      })
      clearInterval(this.interval)
    }
    else if(!this.state.running) {
      this.interval = setInterval(() => {
        this.setState({
            timer: this.state.timer - 1,
            running: true
        })
    }, 1000)
}
    console.log('starting')
  }
  reset(){
    const {breakLength, sessionLength } = this.state
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
              <div id="session-length">{sessionLength}</div>
              <div id="break-length">{breakLength}</div>
            </div>
          </div>
          <div className="timerWrapper" id='start_stop' onClick={() => this.start_stop()}>
            <div id="timer">
              <div id="timer-label">SESSION</div>
              <div id="time-left">{timer}</div>
              
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
