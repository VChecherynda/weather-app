import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">Weather PWA</h1>
          <button id="butRefresh" className="headerButton">Refresh</button>
          <button id="butAdd" className="headerButton">Add</button>
        </header>

        <main className="main">
          <div className="card cardTemplate weather-forecast" hidden>
            <div className="city-key" hidden></div>
            <div className="card-last-updated" hidden></div>
            <div className="location"></div>
            <div className="date"></div>
            <div className="description"></div>
            <div className="current">
              <div className="visual">
                <div className="icon"></div>
                <div className="temperature">
                  <span className="value"></span>
                  <span className="scale">°F</span>
                </div>
              </div>
              <div className="description">
                <div className="humidity"></div>
                <div className="wind">
                  <span className="value"></span>
                  <span className="scale"></span>
                  <span className="direction"></span>
                </div>
                <div className="sunrise"></div>
                <div className="sunset"></div>
              </div>
            </div>
            <div className="future"></div>
          </div>
        </main>

        <div className="dialogContainer">

        </div>

        <div className="loader">
          <svg viewBox="0 0 32 32" width="32" height="32">
            <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
          </svg>
        </div>

      </div>
    );
  }
}

export default App;
