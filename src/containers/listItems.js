import React, { Component } from 'react';

import Main from './main';
import Days from './daysOfTheWeek';;

class ListItems extends Component {
  render() {
    return (
      <main className="main">
        <div className="card weather-forecast">
          <Main />
          {/* <Days /> */}
        </div>
      </main>
    )
  }
}


export default ListItems;