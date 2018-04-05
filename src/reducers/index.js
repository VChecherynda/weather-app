import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
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
  router: routerReducer,
});

export default rootReducers;