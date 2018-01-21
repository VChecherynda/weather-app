const initialState = {
  isOpen: false,
}

export default function popUp(state = initialState, action) {

  switch (action.type) {
    case 'OPEN_DIALOG':
      return { ...state, isOpen: action.payload }

    case 'CLOSE_DIALOG':
      return { ...state, isOpen: action.payload }

    default:
      return state;
  }
}