import React, { Component } from 'react';
import './App.css';

class Timer extends Component {

state = {
    sessionLength: 1,
    breakLength: 5,
    running: false,
    timer: 60,
    timerType: 'session'
  }

  incrementSessionLength() {
    const { sessionLength } = this.state
    if (!this.state.running) {
      if (sessionLength < 60) {
        this.setState({
          timerType: 'session',
          sessionLength: sessionLength + 1,
          timer: (sessionLength * 60) + 60
        })
      }

    }
  }

  decrementSessionLength() {
    const { sessionLength } = this.state
    if (!this.state.running) {
      if (sessionLength > 1) {
        this.setState({
          timerType: 'session',
          sessionLength: sessionLength - 1,
          timer: sessionLength * 60 - 60
        })
      }
    }
  }


  incrementBreakLength() {
    const { breakLength } = this.state

    if (!this.state.running) {
      if (breakLength < 60) {
        this.setState({
          timerType: 'break',
          breakLength: breakLength + 1,
          timer: breakLength * 60 + 60
        })
      }
    }
  }

  decrementBreakLength() {
    const { breakLength } = this.state
    if (!this.state.running) {
      if (breakLength > 1) {
        this.setState({
          timerType: 'break',
          breakLength: breakLength - 1,
          timer: breakLength * 60 - 60
        })
      }
    }
  }

  minutes() {
    const { timer } = this.state

    let minutes = Math.floor(timer / 60)
    let seconds = timer - minutes * 60
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    if (seconds === 0 && minutes === 0) {
      console.log('minutes')
      this.switchTimer()
    }
    return minutes + ':' + seconds;
  }
  switch(num, str) {
    this.setState({
      timer: num,
      timerType: str,
    })
    this.start_stop()
  }
  switchTimer() {
    const { timerType, timer, breakLength, sessionLength } = this.state
    // eslint-disable-next-line default-case
    this.alarm()
    if (timer === 0) {
      timerType === 'session' ? 
        this.switch(breakLength * 60, 'break')
       : 
        this.switch(sessionLength * 60, 'session')
    }
  }
  start_stop() {
    
    if (this.state.running) {
      clearInterval(this.interval)
      this.setState({
        running: false,
        timer: this.state.timer
      })
      this.switchTimer()
      console.log(this.state.timerType)

    } else if (!this.state.running) {
      this.interval = setInterval(
        () => {
          if (this.state.timer > 0) {

            this.setState(prevState => ({
              timer: prevState.timer - 1,
              running: true,
            }))
          } else if (this.state.running) {
            clearInterval(this.interval)
            this.setState({
              running: false,
              timer: this.state.timer
            })
            this.switchTimer()
            console.log(this.state.timerType)
          }
        },
        100
      )  
    }

  }
          
  alarm() {
    if (this.state.timer === 0) {
      this.audioBeep.play();
  }}

  reset() {
    clearInterval(this.interval)
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      timerType: 'session',
      running: false
    })
    this.audioBeep.currentTime = 0
    this.audioBeep.pause()

  }
}
export default Timer