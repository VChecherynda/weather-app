import { call, all } from 'redux-saga/effects';
import { watchDataAdd } from './weather';
import { watchPasswordForget } from './passwordForget';
import { watchSignIn } from './signIn';
import { watchSignUp } from './signUp';


export default function* rootSaga(getState) {
  yield all([
    call(watchDataAdd),
    call(watchSignIn),
    call(watchSignUp),
    call(watchPasswordForget),
  ])
}