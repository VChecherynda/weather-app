const INITIAL_STATE = {
  authUser: null,
  error: null,
};

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser,
});

const errorHandler = (state, action) => ({
  ...state,
  error: action.errorMessaage,
});

function sessionReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'AUTH_USER_SET': {
      return applySetAuthUser(state, action);
    }
    case 'SIGN_IN_FAILED': {
      return errorHandler(state, action);
    }
    case 'SIGN_UP_FAILED': {
      return errorHandler(state, action);
    }
    default: return state;
  }
}

export default sessionReducer;