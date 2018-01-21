import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from './main';
import Days from './daysOfTheWeek';;

class ListItems extends Component {
  render() {
    const cards = this.props.data.byId;
    const ListItems = cards.map(function(el) {
      return (
        <main className="main" key={el}>
          <div className="card weather-forecast">
            <Main num={el}/>
            <Days />
          </div>
        </main>
      )
    })

    return (
      ListItems
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.weatherData
  };
}

export default connect(mapStateToProps)(ListItems);