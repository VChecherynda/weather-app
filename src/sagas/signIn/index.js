import { call, put, takeEvery } from 'redux-saga/effects';

import { auth } from '../../libs/firebase';

import { submitForm } from '../../store/session/signIn/actions';

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
  yield takeEvery(submitForm, signInUserWorker);
}