import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    sessionLength: 1,
    breakLength: 5,
    running: false,
    timer: 60,
    timerType: 'session',
    count: 0,
    lBreakLength: 15,
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

  incrementLBreakLength() {
    const { lBreakLength } = this.state

    if (!this.state.running) {
      if (lBreakLength < 60) {
        this.setState({
          timerType: 'lBreak',
          lBreakLength: lBreakLength + 1,
          timer: lBreakLength * 60 + 60
        })
      }
    }
  }

  decrementLBreakLength() {
    const { lBreakLength } = this.state
    if (!this.state.running) {
      if (lBreakLength > 1) {
        this.setState({
          timerType: 'lBreak',
          lBreakLength: lBreakLength - 1,
          timer: lBreakLength * 60 - 60
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
    const { timerType, timer, breakLength, lBreakLength, sessionLength } = this.state
    // eslint-disable-next-line default-case
    this.alarm()
    if (timer === 0) {
      timerType === 'session' ?
        this.switch(breakLength * 60, 'break')
        :
        this.switch(sessionLength * 60, 'session')

    }
    clearInterval(this.interval)
    this.start_stop()
    if (this.state.count > 4) {
      timerType === 'session' ?
        this.switch(lBreakLength * 60, 'lBreak')
        :
        this.switch(sessionLength * 60, 'session')
      this.setState({
        count: 0
      })
      clearInterval(this.interval)
      this.start_stop()
    }
  }
  start_stop() {
    clearInterval(this.interval)
    if (this.state.running) {

      this.setState({
        running: false,
        timer: this.state.timer
      })

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
              timer: this.state.timer,
              count: this.state.count + 1
            })
            this.switchTimer()
          }
        },
        1000
      )
    }

  }

  alarm() {
    if (this.state.timer === 0) {
      this.audioBeep.play();
    }
  }

  reset() {
    clearInterval(this.interval)
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      timerType: 'session',
      running: false,
      count: 0
    })
    this.audioBeep.currentTime = 0
    this.audioBeep.pause()

  }


  render() {
    const { sessionLength, timerType, breakLength, lBreakLength } = this.state
    return (

      <div className="App">
        <div id="container">

          <h1 id='title'>Pomodoro Clock</h1>
          <div id="topWrapper">
            <div id="labels">
              <h3 id='break-label'>BREAK<br></br>LENGTH</h3>
              <h3 id='session-label'>SESSION<br></br>LENGTH</h3>
              <h3 id='l-break-label'>LONG<br></br>BREAK</h3>
              
            </div>
            <div id="controls">
              <button className='button' id='break-increment' onClick={() => this.incrementBreakLength()}>+</button>
              <button className='button' id='session-increment' onClick={() => this.incrementSessionLength()}>+</button>
              <button className='button' id='lbreak-increment' onClick={() => this.incrementLBreakLength()}>+</button>
              <button className='button' id='break-decrement' onClick={() => this.decrementBreakLength()}>-</button>
              <button className='button' id='lbreak-decrement' onClick={() => this.decrementLBreakLength()}>-</button>
              <button className='button' id='session-decrement' onClick={() => this.decrementSessionLength()}>-</button>
              <div id="session-length">{sessionLength}</div>
              <div id="break-length">{breakLength}</div>
              <div id="lBreakLength">{lBreakLength}</div>
            </div>
          </div>
          <div className="timerWrapper" id='start_stop' onClick={() => this.start_stop()}>
            <div id="timer">
              <div id="timer-label">{timerType}</div>
              <div id="time-left">{this.minutes()}</div>

            </div>
          </div>
          <div id="timer-control"></div>
          <button id='reset' onClick={() => this.reset()}>RESET</button>

        </div>
        <audio id='beep' src='https://goo.gl/65cBl1' ref={(audio) => { this.audioBeep = audio; }} />
      </div>
    );
  }
}

export default App;
