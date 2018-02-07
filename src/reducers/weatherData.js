export function addWeatherCard(state={}, action, city='chicago') {
  switch (action.type) {
    case 'ADD_CARD':
      return {...state, data: action.payload }
    default:
      return state;
  }
}