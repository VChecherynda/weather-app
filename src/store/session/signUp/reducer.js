const INITIAL_STATE = {
  error: null,
};

const errorHandler = (state, action) => ({
  ...state,
  error: action.errorMessaage,
});

function signUpReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SIGN_UP_FAILED': {
      return errorHandler(state, action);
    }
      default: return state;
  }
}

export default signUpReducer;