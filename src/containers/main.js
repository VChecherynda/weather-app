import React, {Component} from 'react';
import {connect} from 'react-redux';

import Main from '../components/Main';

class Content extends Component {
  render() {
    console.log(this.props)
    const futureForecast = this.props.data.channel.item.forecast;
    return (
      <Main />
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.weatherData
  };
}

export default connect(mapStateToProps)(Main );