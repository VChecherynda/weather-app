import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { auth } from '../../libs/firebase';
import * as routes from '../../constants/routes';

import { submitForm } from '../../store/passwordChange/actions';

function* PasswordChangeWorker({ payload }) {
  const { passwordOne } = payload;

  try {
    yield call(auth.doPasswordUpdate, passwordOne);
    yield put({type: "PASSWORD_CHANGE_SUCCESS"});

  } catch (e) {
    yield put({type: "PASSWORD_CHANGE_FAILED", errorMessaage: e.message });

  }
}

export function* watchPasswordChange() {
  yield takeEvery(submitForm, PasswordChangeWorker)
}