import React, { Component } from 'react';

import Header from './containers/header';
import Dialog from './containers/dialog';
import ListItems from './containers/listItems';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dialog />
        <ListItems />
      </div>
    );
  }
}

export default App;
