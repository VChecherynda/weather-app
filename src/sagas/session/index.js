import { eventChannel } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { firebase } from '../../libs/firebase';
import * as routes from '../../constants/routes';

const onAuthStateChangedChannel = eventChannel(emitter => {
  const handler = (payload) => {
    console.log('handler', payload);
    if (payload) {
      emitter(true);
    } else {
      emitter(false);
    }
  }

  const unsubscribe = firebase.auth.onAuthStateChanged(handler);

  return unsubscribe;
});

function* onAuthStateChangedWorker(user) {
  console.log(user);
  yield put({ type: 'AUTH_USER_SET', exist: user });

  if (user) {
    yield put(push(routes.HOME));
  }
}

export function* watchUserSet() {
  yield takeEvery(onAuthStateChangedChannel, onAuthStateChangedWorker);
}