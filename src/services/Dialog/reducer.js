export function modal(state = initialState, action) {
  switch (action.type) {

    case 'CLOSE_DIALOG':
      return { ...state, isOpen: action.payload }

    default:
      return state;
  }
}