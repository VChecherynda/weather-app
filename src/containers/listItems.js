import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from './main';
import Days from './daysOfTheWeek';;

class ListItems extends Component {
  render() {
    console.log(this.props);
    return (
      <main className="main">
        <div className="card weather-forecast">
          {/* <Main /> */}
          {/* <Days /> */}
        </div>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.addWeatherCard
  };
}

export default connect(mapStateToProps)(ListItems);