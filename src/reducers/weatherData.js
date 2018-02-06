export function addWeatherCard(state={}, action, city='chicago') {
  switch (action.type) {
    case 'ADD_CARD':
      return {...state }
    default:
      return state;
  }
}