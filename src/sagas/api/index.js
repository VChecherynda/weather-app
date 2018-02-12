export default function weatherData(city) {
  const url = `https://api.apixu.com/v1/current.json?key=a2358c89b18042bb8e090543180802&q=${city}`
  return fetch(url)
    .then(function(res) {
      const response = res.json();
      return response
    })
    .then(function(json) {
      // For console
      console.log(JSON.stringify(json, null, 3));
      // End
      return json;
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })
}