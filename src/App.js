import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './containers/Header';
import Dialog from './containers/Dialog';
import ListItems from './containers/ListItems';
import SidebarMenu from './containers/SIdebarMenu';

import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';

import * as routes from './constants/routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <SidebarMenu />
            <Header />
            <Dialog />
            <ListItems />
          </div>

          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />

          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />

          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />

        </div>
      </Router>
    );
  }
}

export default App;
