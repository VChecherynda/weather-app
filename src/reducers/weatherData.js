export function addWeatherCard(state={}, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return {...state, data: action.payload }
    case 'ADD_CARD_SUCCESS':
      return {...state, responseData: action.payload }
    default:
      return state;
  }
}