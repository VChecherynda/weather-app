import { all, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { auth } from '../../libs/firebase';

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
  yield all([
    takeEvery(signOut, signOutUserWorker),
    takeEvery(signOut, onAuthStateChangedWorker),
  ]);
}