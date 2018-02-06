import { combineReducers } from 'redux';
import { addWeatherCard } from './weatherData';

const allReducers = combineReducers({
  addWeatherCard: addWeatherCard,
});

export default allReducers;