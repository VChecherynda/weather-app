import React, { Component } from 'react';

import Card from './components/card';
import Days from './daysOfTheWeek';;

class ListItems extends Component {
  render() {
    return (
      <main className="main">
        <div className="card weather-forecast">
          <Card />
        </div>
      </main>
    )
  }
}


export default ListItems;