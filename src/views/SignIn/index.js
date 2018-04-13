import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SignInForm from './SignInForm';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';

import { auth } from '../../assets/libs/firebase'
import * as routes from '../../constants/routes';

const SignInPage = (props) => {
  console.log('sign in view', props);
  return(
    <div>
      <h1>Sign in</h1>
      <SignInForm submitForm={props.submitForm} />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  )
}

export default SignInPage;
