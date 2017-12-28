import React, {Component} from 'react';

class Future extends Component {
  render() {
		const days = this.props.futureDayOfTheWeek;
		return (
			<div className="future">
			{
				this.props.futureForecast.map(function(day, i) {
					return (
						<div key={i} className="oneday">
							<div className="date"></div>
							<div className="icon partly-cloudy-day">{days[i]}</div>
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

export default Future;