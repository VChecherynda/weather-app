import {combineReducers} from 'redux';
import { weatherData } from './weatherData';
import PopUpData from './popUp';

const allReducers = combineReducers({
  weatherData: weatherData,
  popUpData: PopUpData
});

export default allReducers;