import React, { Component } from 'react';

import Header from './containers/header';
import Dialog from './containers/dialog';
import ListItems from './containers/listItems';

import './App.css';

const listOfCities = [
  { value: 'Boston', label: 'Boston, MA'},
  { value: 'Austin', label: 'Austin, TX'},
  { value: 'Chicago', label: 'Chicago, IL'},
  { value: 'New York', label: 'New York, NY'},
  { value: 'Portland', label: 'Portland, OR'},
  { value: 'San Francisco', label: 'San Francisco, CA'},
  { value: 'Seattle', label: 'Seattle, WA'}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header listOfCities={listOfCities}/>
        <Dialog listOfCities={listOfCities}/>
        <ListItems />
      </div>
    );
  }
}

export default App;
