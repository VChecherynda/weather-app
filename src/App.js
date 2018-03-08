import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import MainPage from './containers/Main';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import withAuthentication from './components/withAuthentication';

import * as routes from './constants/routes';

const App = () => (
  <Router>
    <div>
      <Route
        exact path={'/'}
        component={() => <SignInPage />}
      />

      <Route
        exact path={routes.HOME}
        component={() => <MainPage />}
      />

      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />

      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />

    </div>
  </Router>
)

export default withAuthentication(App);
