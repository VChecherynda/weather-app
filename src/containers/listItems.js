import React, { Component } from 'react';

import Main from './main';
import Days from './daysOfTheWeek';;

class ListItems extends Component {
  render() {

    const Card =  
      <main className="main">
        <div className="card weather-forecast">
          <Main />
          <Days />
        </div>
      </main>;
    
    const List = [Card,Card]

    const ListItems =  List.map(function(el){return el});

    return (
        ListItems
    );
  }
}

export default ListItems;