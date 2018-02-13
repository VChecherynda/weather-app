const initialState = {
  cities: {},
}

export function addWeatherCard(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return { ...state, data: action.payload }

    case 'ADD_CARD_SUCCESS':
      const incomeWeather = action.payload;
      const { name } = incomeWeather.location;

      return {
        ...state,
        cities: {
          ...state.cities,
          [name]: incomeWeather
        }
      }

    // onClickRemoveCard (myObj, deleteKey) {
    //   return Object.keys(myObj)
    //     .filter(key => key !== deleteKey)
    //     .reduce((result, current) => {
    //       result[current] = myObj[current];
    //       return result;
    //   }, {});
    // }

    case 'DELETE_CARD':
      return state

    case 'REFRESH':
      const intialWeather = action.payload;
      const initialName = Object.keys(intialWeather)[0];

      return { cities: { [initialName]: state.cities[initialName]} }

    default:
      return state;
  }
}