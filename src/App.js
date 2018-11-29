import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {
    return (

      <div className="App">
        <div id="container">

          <h1 id='title'>Pomodoro Clock</h1>
          <div id="topWrapper">
            <div id="labels">
              <h3 id='break-label'>BREAK LENGTH</h3>
              <h3 id='session-label'>SESSION LENGTH</h3>
            </div>
            <div id="controls">
              <button id='break-increment'>i</button>
              <button id='session-increment'>i</button>
              <button id='break-decrement'>d</button>
              <button id='session-decrement'>d</button>
              <div id="session-length">25</div>
              <div id="break-length">5</div>
            </div>
          </div>
          <div id="timerWrapper">
            <div id="timer">
              <div id="timer-label">SESSION</div>
              <div id="time-left">25:00</div>
              <div id="timer-control">
                <button id='start_stop'>SS</button>
                <button id='reset'>reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
