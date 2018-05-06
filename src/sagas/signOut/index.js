import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { auth } from '../../libs/firebase';

import { signOut } from '../../store/session/signOut/action';

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
}