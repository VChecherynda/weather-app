import React, { Component } from 'react';
import './style.css';

class Main extends Component {
  render() {
    const card = this.props.data.byHash[this.props.num];
    return (
      <div>
        <div className="city-key" hidden="true">{card.key}</div>
        <div className="card-last-updated" hidden="">{card.created}</div>
        <div className="location">{card.label}</div>
        <div className="date"></div>
        <div className="description">{card.channel.item.condition.text}</div>
        <div className="current">
          <div className="visual">
            <div className="icon windy"></div>
            <div className="temperature">
              <span className="value">{card.channel.item.condition.temp}</span><span className="scale">°F</span>
            </div>
          </div>
          <div className="description">
            <div className="humidity">{card.channel.atmosphere.humidity}%</div>
            <div className="wind">
              <span className="value">25</span>
              <span className="scale">mph</span>
              <span className="direction">195°</span>
            </div>
            <div className="sunrise">5:43 am</div>
            <div className="sunset">8:21 pm</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;