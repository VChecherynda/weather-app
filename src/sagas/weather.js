import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function weatherData(city) {
  const url = `https://api.apixu.com/v1/current.json?key=a2358c89b18042bb8e090543180802&q=${city}`
  return fetch(url)
    .then(function(res) {
      const response = res.json();
      console.log('response====>', response);
      return response
    })
    .then(function(json) {
      const state = JSON.stringify(json);
      console.log('state', state);
      return state;
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })
}

export function* addCardWithData(action) {
  try {
    const weather = yield call(weatherData, action.payload);
    console.log('saga====>',weather);
    yield put({type: "ADD_CARD_SUCCESS", payload: weather});
  } catch (e) {
    yield put({type: "ADD_CARD_FAILED", message: e.message});
  }
}

export function* watchDataAdd() {
  yield takeEvery('ADD_CARD', addCardWithData)
}