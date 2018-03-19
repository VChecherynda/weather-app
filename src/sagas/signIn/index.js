import { call, put, takeEvery, fork } from 'redux-saga/effects';


import { auth } from '../../assets/libs/firebase';
import * as routes from '../../constants/routes';

import { submitForm } from '../../store/signIn/actions';

let error;

const signInHandler = (email, password ) => {

  auth.doCreateUserWithEmailAndPassword(email, passwordOne)
  .then(authUser => {
    this.setState(() => ({ ...INITIAL_STATE }));
    history.push(routes.HOME);
  })
  .catch(error => {
    this.setState(byPropKey('error', error));
  });

}

function* signInUser({ payload }) {
  console.log(payload);

  const { email, password } = payload;

  try {
    yield signInHandler(email, password );
    yield put({type: "SIGN_IN_SUCCESS"});

  } catch (e) {
    yield put({type: "SIGN_IN_FAILED", message: error });

  }

}

export function* watchSignInAdd() {
  yield takeEvery(submitForm, signInUser)
}