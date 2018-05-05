import { eventChannel } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { auth, firebase } from '../../assets/libs/firebase';
import * as routes from '../../constants/routes';

import { submitForm } from '../../store/signIn/actions';

function* onAuthStateChangedWorker(user) {
  yield put({ type: 'AUTH_USER_SET', exist: true });

  if (user) {
    console.log('signed In');
    yield put(push(routes.HOME));
  }
}

function* signInUserWorker({ payload }) {
  const { email, password } = payload;

  try {
    yield call(auth.doSignInWithEmailAndPassword, email, password);
    yield put({type: "SIGN_IN_SUCCESS"});
  } catch (e) {
    yield put({type: "SIGN_IN_FAILED", errorMessaage: e.message });
  }
}

export function* watchSignIn() {
  yield [
    takeEvery(submitForm, signInUserWorker),
    takeEvery(submitForm, onAuthStateChangedWorker),
  ]
}