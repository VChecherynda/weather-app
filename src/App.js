import React, { Component } from 'react';

import Header from './containers/header';
import Main from './containers/main';
import Days from './containers/daysOfTheWeek';
import Loader from './components/Loader';
import Dialog from './containers/dialog';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <div className="card weather-forecast">
            <Main />
            <Days />
          </div>
        </main>
        <Loader />
        <Dialog />
      </div>
    );
  }
}

export default App;
