import { call, all } from 'redux-saga/effects';
import { watchDataAdd } from './weather';
import { watchSignIn } from './signIn';

export default function* rootSaga(getState) {
  yield all([
    call(watchDataAdd),
    call(watchSignIn),
  ])
}