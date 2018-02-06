export default function weatherData(city) {
  const url = `https://query.yahooapis.com/v1/public/yql?q=select wind, item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}')&format=json` 
  fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      const state = JSON.stringify(json);
      console.log(state);
      return state;
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })
}