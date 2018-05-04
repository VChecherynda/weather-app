import { eventChannel } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux'

import { auth, firebase } from '../../assets/libs/firebase';
import * as routes from '../../constants/routes';

import { submitForm } from '../../store/signIn/actions';

const onAuthStateChangedChannel = eventChannel(emitter => {
  const handler = (payload) => {
    if (payload) {
      emitter(payload);
    }
  }

  const unsubscribe = firebase.auth.onAuthStateChanged(handler);
  return unsubscribe;
});

function* onAuthStateChangedWorker(user) {
  console.log('onAuthStateChangedWorker', user);

  yield put({ type: 'AUTH_USER_SET', exist: !!user });

  if (user) {
    yield put(push(routes.HOME));
  }
}


// function* autorizedUserWorker(exist) {
//   console.log('AUTH_USER_SET');
//   yield put({ type: 'AUTH_USER_SET', exist });
// }

// function* fetchUserAutorized() {
//   console.log('fetchUserAutorized');
//   yield firebase.auth.onAuthStateChanged(authUser => autorizedUserWorker(!!authUser));
// }

function* signInUserWorker({ payload }) {
  const { email, password } = payload;

  try {
    yield call(auth.doSignInWithEmailAndPassword, email, password);
    yield put({type: "SIGN_IN_SUCCESS"});
    // yield fetchUserAutorized();
    // yield put(push(routes.HOME));
  } catch (e) {
    yield put({type: "SIGN_IN_FAILED", errorMessaage: e.message });
  }
}

export function* watchSignIn() {
  yield takeEvery(submitForm, signInUserWorker);
  yield takeEvery(onAuthStateChangedChannel, onAuthStateChangedWorker)
}