import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <h1>Sign in</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
})

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME)
      })
      .catch(error => {
        this.setState(byPropKey('error', error))
      })

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.props;

    const isInvalid =
      password == '' ||
      email == '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={() => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email"
        />
        <input
          value={passwordOne}
          onChange={() => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Enter password"
        />
        <input
          value={passwordTwo}
          onChange={() => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="text"
          placeholder="Confirm password"
        />
        <button disabled={isInvalid} type="submit">
          Sign up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}


const SignUpLink = () =>
  <p>
    Don't have an account ?
    {' '}
    <Link to={routes.SIGN_UP}>Sign up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
}
