import React, { Component } from 'react';

import { auth } from '../firebase';

const PasswordForgetPage = () =>
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>

const INITIAL_STATE = {
  email: '',
  error: null,
}

const byPropKey = (property, value) => () => ({
  [property]: value,
})

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => this.setState({ ...INITIAL_STATE }))
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      })

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={() => this.setState(byPropKey('email', event.target.value))}
          type="email"
          placeholder="Enter password"
        />
        <button disabled={isInvalid} type="submit">
            Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to="/pw-forget">Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};