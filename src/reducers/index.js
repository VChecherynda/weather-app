import {combineReducers} from 'redux';
import WeatherData from './weatherData';
import PopUpData from './popUp';

const allReducers = combineReducers({
  weatherData: WeatherData,
  popUpData: PopUpData
});

export default allReducers;