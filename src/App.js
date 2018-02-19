import React, { Component } from 'react';

import Header from './containers/Header';
import Dialog from './containers/Dialog';
import ListItems from './containers/ListItems';
import SidebarMenu from './containers/SIdebarMenu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidebarMenu />
        <Header />
        <Dialog />
        <ListItems />
      </div>
    );
  }
}

export default App;
