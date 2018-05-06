import React from 'react';

import { Route } from 'react-router-dom';

import * as routes from './constants/routes';

import Home from './views/Home';
import SignUpPage from './views/SignUp';
import SignInPage from './views/SignIn';
import PasswordForgetPage from './views/PasswordForget';

import PrivateRoute from './containers/PrivateRoute';

const App = () => {
  return (
    <div>
      <Route
        exact path={'/'}
        component={() => <SignInPage />}
      />

      <PrivateRoute
        exact path={routes.HOME}
        component={() => <Home/>}
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
}

export default App;
