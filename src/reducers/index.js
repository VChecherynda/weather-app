import {combineReducers} from 'redux';
import WeatherData from './weatherData';

const allReducers = combineReducers({
  weatherData: WeatherData
});

export default allReducers;