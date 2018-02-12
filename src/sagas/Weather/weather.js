import { call, put, all, takeEvery } from 'redux-saga/effects'

function weatherData(city) {
  const url = `https://api.apixu.com/v1/current.json?key=a2358c89b18042bb8e090543180802&q=${city}`
  return fetch(url)
    .then(function(res) {
      const response = res.json();
      return response
    })
    .then(function(json) {
      console.log(JSON.stringify(json, null, 3))
      return json;
    })
    .catch(function(ex) {
      console.log('parsing failed', ex)
    })
}

function* addCardWithData(action) {
  try {
    const weather = yield call(weatherData, action.payload);
    yield put({type: "ADD_CARD_SUCCESS", payload: weather});
  } catch (e) {
    yield put({type: "ADD_CARD_FAILED", message: e.message});
  }
}

export function* watchDataAdd() {
  yield takeEvery('ADD_CARD', addCardWithData)
}