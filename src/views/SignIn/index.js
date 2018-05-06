import React from 'react';

import SignInForm from '../../containers/SignIn';
import SignUpLink from '../SignUp/SignUpLink';
import PasswordForgetLink from '../PasswordForget/PasswordForgetLink';

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
