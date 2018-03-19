import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './views/Home';
import SignUpPage from './views/SignUp';
import SignInPage from './views/SignIn';
import PasswordForgetPage from './views/PasswordForget';

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
        component={() => <Home />}
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

export default App;
