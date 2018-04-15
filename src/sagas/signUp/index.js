import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { auth } from '../../assets/libs/firebase';
import * as routes from '../../constants/routes';

import { submitSignUpForm } from '../../store/signUp/actions';

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
  yield takeEvery(submitSignUpForm, signUpUserWorker)
}