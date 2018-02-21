import React, { Component } from 'react';
import {
  link,
  withRouter
} from 'react-router-dom';

import { auth } from '../firebase'
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
    <h1>Sign Up</h1>
    <SignUpForm history={history}/>
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
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
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
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
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne == '' ||
      email == '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={() => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Enter fullname"
        />
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
        <button  disabled={isInvalid}>
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
