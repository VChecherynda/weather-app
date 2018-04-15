import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import store from './index.js';

import * as routes from './constants/routes';

import Home from './views/Home';
import SignUpPage from './views/SignUp';
import SignInPage from './views/SignIn';
import PasswordForgetPage from './views/PasswordForget';


const App = () => (
  <div>
    <Route
      exact path={'/'}
      component={() => <SignInPage />}
    />

    <Route
      exact path={routes.HOME}
      component={(props) => <Home {...props}/>}
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
)

export default App;
