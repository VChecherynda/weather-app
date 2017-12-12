import React, {Component} from 'react';
import {bindActionCreators} from 'react';
import {connect} from 'react-redux';

class Content extends Component {
  render() {
    return (
      <main className="main">
        <div className="card cardTemplate weather-forecast" hidden>
          <div className="city-key" hidden></div>
          <div className="card-last-updated" hidden></div>
          <div className="location"></div>
          <div className="date"></div>
          <div className="description"></div>
          <div className="current">
            <div className="visual">
              <div className="icon"></div>
              <div className="temperature">
                <span className="value"></span>
                <span className="scale">°F</span>
              </div>
            </div>
            <div className="description">
              <div className="humidity"></div>
              <div className="wind">
                <span className="value"></span>
                <span className="scale"></span>
                <span className="direction"></span>
              </div>
              <div className="sunrise"></div>
              <div className="sunset"></div>
            </div>
          </div>
          <div className="future"></div>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.weatherData
  };
}

export default connect(mapStateToProps)(Content);