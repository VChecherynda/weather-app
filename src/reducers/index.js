import {combineReducers} from 'redux';
import { data1,data2 } from './weatherData';
import PopUpData from './popUp';

const allReducers = combineReducers({
  weatherData1: data1,
  weatherData2: data2,
  popUpData: PopUpData
});

export default allReducers;