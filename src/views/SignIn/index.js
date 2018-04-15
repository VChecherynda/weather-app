import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SignInForm from '../../containers/SignIn';
import SignUpLink from '../SignUp/SignUpLink';
import { PasswordForgetLink } from '../PasswordForget';

import { auth } from '../../assets/libs/firebase'
import * as routes from '../../constants/routes';

const SignInPage = (props) => {
  return(
    <div>
      <h1>Sign in</h1>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  )
}

export default SignInPage;
