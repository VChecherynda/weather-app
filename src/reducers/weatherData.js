const initialState = {
  cities: [],
}

export function addWeatherCard(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return {...state, data: action.payload }
    case 'ADD_CARD_SUCCESS':
      return {...state, cities: [...state.cities, action.payload] }
    default:
      return state;
  }
}