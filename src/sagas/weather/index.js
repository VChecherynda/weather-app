import { call, put, takeEvery } from 'redux-saga/effects';
import weatherData from '../api';

function* addInitialCardWithData(action) {
  try {
    const weather = yield call(weatherData, action.payload);
    yield put({type: "ADD_INITIAL_CARD_SUCCESS", payload: weather});
  } catch (e) {
    yield put({type: "ADD_INITIAL_CARD_FAILED", message: e.message});
  }
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
  yield takeEvery('REFRESH', addInitialCardWithData)
}