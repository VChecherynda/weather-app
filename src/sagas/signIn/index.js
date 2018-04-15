import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { auth } from '../../assets/libs/firebase';
import * as routes from '../../constants/routes';

import { submitForm } from '../../store/signIn/actions';

function* signInUserWorker({ payload }) {
  const { email, password } = payload;

  try {
    yield call(auth.doSignInWithEmailAndPassword,email, password);
    yield put({type: "SIGN_IN_SUCCESS"});
    yield put(push(routes.HOME));

  } catch (e) {
    yield put({type: "SIGN_IN_FAILED", errorMessaage: e.message });

  }
}

export function* watchSignIn() {
  yield takeEvery(submitForm, signInUserWorker)
}