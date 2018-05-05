import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { auth } from '../../assets/libs/firebase';
import * as routes from '../../constants/routes';

import { signOut } from '../../store/signOut/action';

function* onAuthStateChangedWorker(user) {
  yield put({ type: 'AUTH_USER_SET', exist: false });
}

function* signOutUserWorker() {
  try {
    yield auth.doSignOut();
    yield put({type: "SIGN_OUT_SUCCESS"});
    yield put(push('/'));

  } catch (e) {
    yield put({type: "SIGN_OUT_FAILED"});

  }
}

export function* watchSignOut() {
  yield takeEvery(signOut, signOutUserWorker);
  yield takeEvery(signOut, onAuthStateChangedWorker);
}