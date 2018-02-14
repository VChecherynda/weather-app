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

    case 'REFRESH':
      return { ...state, data: action.payload }

    case 'ADD_INITIAL_CARD_SUCCESS':
      console.log('reducer intial ====>',action.payload);
      const incomeInitialWeather = action.payload;
      const initialName = incomeInitialWeather.location.name;

      return {
        ...state,
        cities: {
          [initialName]: incomeInitialWeather
        }
      }

    case 'DELETE_CARD':

      const filteredCitiesWeather = Object.keys(state.cities)
        .reduce((acc, val) => {
          if (val !== action.payload ) {
            return Object.assign(acc, {[val]: state.cities[val]});
          }
          return acc;
        }, {});

      return {
        ...state,
        cities: {
          ...filteredCitiesWeather,
        }
      };

    default:
      return state;
  }
}