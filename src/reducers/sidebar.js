const initialState = {
  isOpen: false,
}

export function sidebar(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR_MENU':
      return { ...state, isOpen: action.payload }

    case 'CLOSE_SIDEBAR_MENU':
      return { ...state, isOpen: action.payload }

    default:
      return state;
  }
}