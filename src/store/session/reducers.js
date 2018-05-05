import { combineReducers } from 'redux';
import signIn from './signIn/reducer';
import signUp from './signIn/reducer';
import passwordReset from './signIn/reducer';

const INITIAL_STATE = {
  authUser: false,
};

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.exist,
});

function sessionReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'AUTH_USER_SET': {
      return applySetAuthUser(state, action);
    }
    default: return state;
  }
}

const sessionReducerCombine = combineReducers({
  signIn,
  signUp,
  passwordReset,
  sessionReducer,
});

export default sessionReducerCombine;
