import React, { Component } from 'react';

import Header from './components/Header';
import Main from './containers/main';
import Days from './containers/daysOfTheWeek';
import Loader from './components/Loader';
import Dialog from './components/Dialog';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Days />
        <Loader />
        <Dialog />
      </div>
    );
  }
}

export default App;
