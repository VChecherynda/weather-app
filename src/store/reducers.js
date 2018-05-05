import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import session from './session/reducers';
import { addWeatherCard } from './weather/reducer';
import { modal } from './modal/reducer';

const rootReducers = combineReducers({
  addWeatherCard,
  session,
  modal,
  router: routerReducer,
});

export default rootReducers;