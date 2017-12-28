import React, {Component} from 'react';
import {connect} from 'react-redux';
import Future from '../components/Future'

class DaysOfTheWeek extends Component {
	render() {
		const futureForecast = this.props.data.channel.item.forecast;		
		const dayOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fr','St'];
		const today = 4;		
		const futureDayOfTheWeek = dayOfTheWeek.map(function(day, i){
			return dayOfTheWeek[(i + today) % 7]
		});

		console.log(futureForecast);

		return (
			<Future 
			  futureForecast={this.futureForecast}
				futureDayOfTheWeek={this.futureDayOfTheWeek}/>
		)
	}
}

function mapStateToProps(state) {
  return {
    data: state.weatherData
  };
}

export default connect(mapStateToProps)(DaysOfTheWeek);