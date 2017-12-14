import React, {Component} from 'react';
import {connect} from 'react-redux';

class Future extends Component {
  render() {
		const futureForecast = this.props.data.channel.item.forecast;
		const dayOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fr','St'];

		const today = 4;		
		const futureDayOfTheWeek = dayOfTheWeek.map(function(day, i){
			return dayOfTheWeek[(i + today) % 7]
		});

		console.log(today,futureDayOfTheWeek);
		return (
			<div className="future">
			{
				futureForecast.map(function(day, i) {
					return (
						<div key={i} className="oneday">
							<div className="date"></div>
							<div className="icon partly-cloudy-day">{futureDayOfTheWeek[i]}</div>
							<div className="temp-high">
								<span className="value">{day.high}</span>°
							</div>
							<div className="temp-low">
								<span className="value">{day.low}</span>°
							</div>
						</div>
					);
				})
			}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    data: state.weatherData
  };
}

export default connect(mapStateToProps)(Future);