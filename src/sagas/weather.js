import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function weatherData(city) {
  const url = `https://query.yahooapis.com/v1/public/yql?q=select wind, item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}')&format=json`
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const state = JSON.stringify(json);
      console.log('state', state);
      return state;
    })
    .catch((ex) => {
      console.log('parsing failed', ex)
    })
}

const url = "https://query.yahooapis.com/v1/public/yql?q=select wind, item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='chicago')&format=json"

const city = 'chicago';

export function* addCardWithData(action) {
  try {
    const weather = yield call(weatherData, action.payload);
    yield put({type: "ADD_CARD", weatherData: weather});
  } catch (e) {
    yield put({type: "ADD_CARD_FAILED", message: e.message});
  }
}

export function* watchDataAdd() {
  // yield takeEvery('INCREMENT_ASYNC', addCardWithData)
  yield takeEvery('ADD_CARD', addCardWithData);
}