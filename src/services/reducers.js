import { combineReducers } from 'redux';
import { addWeatherCard } from './weatherData';
import { modal } from './modal'

const allReducers = combineReducers({
  addWeatherCard: addWeatherCard,
  modal: modal,
});

export default allReducers;