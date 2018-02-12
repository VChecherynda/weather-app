import React, { Component } from 'react';

import Header from './containers/header';
import ListItems from './containers/listItems';
import Dialog from './containers/dialog';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ListItems />
        <Dialog />
      </div>
    );
  }
}

export default App;
