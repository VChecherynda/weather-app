const INITIAL_STATE = {
  isResetPassword: false,
  error: null,
};

const errorHandler = (state, action) => ({
  ...state,
  error: action.errorMessaage,
});

function passwordReset (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'PASSWORD_RESET_SUCCESS': {
      return {...state,
        isResetPassword: true,
        error: null,
      };
    }
    case 'PASSWORD_RESET_FAILED': {
      return errorHandler(state, action);
    }
    default: return state;
  }
}

export default passwordReset;
