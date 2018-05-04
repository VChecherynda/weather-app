const INITIAL_STATE = {
  authUser: false,
  isResetPassword: false,
  error: null,
};

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.exist,
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
    case 'PASSWORD_RESET_SUCCESS': {
      return {...state,
        isResetPassword: true,
        error: null,
      };
    }
    case 'PASSWORD_RESET_FAILED': {
      return errorHandler(state, action);
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