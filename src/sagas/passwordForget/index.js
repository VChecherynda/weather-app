import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { auth } from '../../assets/libs/firebase';
import * as routes from '../../constants/routes';

import { submitForm } from '../../store/passwordForget/actions';

function* PasswordForgetWorker({ payload }) {
  const { email } = payload;

  try {
    yield call(auth.doPasswordReset, email);
    yield put({type: "PASSWORD_RESET_SUCCESS"});

  } catch (e) {
    yield put({type: "PASSWORD_RESET_FAILED", errorMessaage: e.message });

  }
}

export function* watchPasswordForget() {
  yield takeEvery(submitForm, PasswordForgetWorker)
}