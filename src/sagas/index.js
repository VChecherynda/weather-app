import { call, all } from 'redux-saga/effects'
import { watchDataAdd } from './Weather/weather'

export default function* rootSaga(getState) {
  yield all([
    call(watchDataAdd)
  ])
}