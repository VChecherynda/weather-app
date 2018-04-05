import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';

import { auth } from '../../assets/libs/firebase'
import * as routes from '../../constants/routes';

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

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE}
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
        this.setState(() => ({...INITIAL_STATE}));
        history.push('/home');
      })
      .catch(error => {
        this.setState({'error': error})
      });

    event.preventDefault();
  }

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return(
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={e => this.setState({'email': e.target.value})}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={e => this.setState({'password': e.target.value})}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};