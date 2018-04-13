import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { card, deleteWeatherCard } = this.props;

    return (
      <div className="card-wrapper">
        <div
          onClick={() => deleteWeatherCard(card.location.name)}
          className="close"
        />
        <div className="location">{card.location.name}</div>
        <div className="card-last-updated" hidden="">{card.current.last_updated}</div>
        <div className="current">
        <div className="visual">
          <div className="icon">
            <img src={card.current.condition.icon} />
          </div>
          <div className="temperature">
            <span className="value">{card.current.temp_c}</span><span className="scale">°C</span>
          </div>
        </div>
        <div className="description">
          <div className="humidity">{card.current.humidity}%</div>
          <div className="wind">
            <span className="value">{card.current.wind_kph}km</span>
            <span className="direction">{card.current.wind_degree}°</span>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Card;