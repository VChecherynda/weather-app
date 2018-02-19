import { combineReducers } from 'redux';
import { addWeatherCard } from './weatherData';
import { modal } from './modal'
import { sidebar } from './sidebar'
import session from './session'

const allReducers = combineReducers({
  addWeatherCard: addWeatherCard,
  session: session,
  sidebar: sidebar,
  modal: modal,
});

export default allReducers;