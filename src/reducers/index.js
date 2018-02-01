import { combineReducers } from 'redux';
import { addWeatherCard } from './weatherData';
import PopUpData from './popUp';

const allReducers = combineReducers({
  popUpData: PopUpData,
  addWeatherCard: addWeatherCard,
});

export default allReducers;