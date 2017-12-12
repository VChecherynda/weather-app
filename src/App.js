import React, { Component } from 'react';

import Header from './components/header';
import Main from './components/main';
import Loader from './components/loader';
import Dialog from './components/dialog';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Loader />
        <Dialog />
      </div>
    );
  }
}

export default App;
