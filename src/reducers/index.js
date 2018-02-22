import { combineReducers } from 'redux';
import { addWeatherCard } from './weatherData';
import { modal } from './modal';
import { sidebar } from './sidebar';
import session from './session';
import user from './user';

const rootReducers = combineReducers({
  addWeatherCard: addWeatherCard,
  user: user,
  session: session,
  sidebar: sidebar,
  modal: modal,
});

export default rootReducers;