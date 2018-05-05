const INITIAL_STATE = {
  error: null,
};

const errorHandler = (state, action) => ({
  ...state,
  error: action.errorMessaage,
});

function signInReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SIGN_IN_FAILED': {
      return errorHandler(state, action);
    }
      default: return state;
  }
}

export default signInReducer;