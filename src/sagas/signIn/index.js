import { call, put, takeEvery } from 'redux-saga/effects';

import { auth } from '../../assets/libs/firebase';
import * as routes from '../../constants/routes';

import { submitForm } from '../../store/signIn/actions';

function* signInUserWorker({ payload }) {
  const { history, email, password } = payload;

  try {

    yield call(auth.doSignInWithEmailAndPassword,email, password);
    yield put({type: "SIGN_IN_SUCCESS"});
    history.push('/home');

  } catch (e) {
    yield put({type: "SIGN_IN_FAILED", message: e.message });

  }
}

export function* watchSignIn() {
  yield takeEvery(submitForm, signInUserWorker)
}