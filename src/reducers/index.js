import { combineReducers } from 'redux';
import { addWeatherCard } from './weatherData';
import { modal } from './modal'
import { sidebar } from './sidebar'

const allReducers = combineReducers({
  addWeatherCard: addWeatherCard,
  modal: modal,
  sidebar: sidebar,
});

export default allReducers;