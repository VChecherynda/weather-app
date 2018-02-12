import { call, put, all, takeEvery } from 'redux-saga/effects'
import weatherData from '../api'

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