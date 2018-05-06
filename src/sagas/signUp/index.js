import { all, call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { auth } from '../../libs/firebase';
import * as routes from '../../constants/routes';

import { submitSignUpForm } from '../../store/signUp/actions';

function* onAuthStateChangedWorker(user) {
  yield put({ type: 'AUTH_USER_SET', exist: true });

  if (user) {
    yield put(push(routes.HOME));
  }
}

function* signUpUserWorker({ payload }) {
  const { email, passwordOne } = payload;

  try {
    yield call(auth.doCreateUserWithEmailAndPassword, email, passwordOne);
    yield put({type: "SIGN_UP_SUCCESS"});
    yield put(push(routes.HOME));

  } catch (e) {
    yield put({type: "SIGN_UP_FAILED", errorMessaage: e.message });

  }
}

export function* watchSignUp() {
  yield all([
    takeEvery(submitSignUpForm, signUpUserWorker),
    takeEvery(submitSignUpForm, onAuthStateChangedWorker),
  ]);
}