import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="card weather-forecast">
          <div className="city-key" hidden="true">{this.props.data.key}</div>
          <div className="card-last-updated" hidden="">{this.props.data.created}</div>
          <div className="location">{this.props.data.label}</div>
          <div className="date"></div>
          <div className="description">{this.props.data.channel.item.condition.text}</div>
          <div className="current">
            <div className="visual">
              <div className="icon windy"></div>
              <div className="temperature">
                <span className="value">{this.props.data.channel.item.condition.temp}</span><span className="scale">°F</span>
              </div>
            </div>
            <div className="description">
              <div className="humidity">{this.props.data.channel.atmosphere.humidity}%</div>
              <div className="wind">
                <span className="value">25</span>
                <span className="scale">mph</span>
                <span className="direction">195</span>°
              </div>
              <div className="sunrise">5:43 am</div>
              <div className="sunset">8:21 pm</div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;