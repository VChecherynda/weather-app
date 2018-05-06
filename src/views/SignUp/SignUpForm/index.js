import React, { Component } from 'react';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
    console.log('sighUp ====>', this.props);
  }

  onSubmit = (event) => {
    const {
      email,
      passwordOne,
    } = this.state;

    const { submitSignUpForm } = this.props;

    submitSignUpForm({ email, passwordOne });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState({'username': event.target.value})}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState({'email': event.target.value})}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState({'passwordOne': event.target.value})}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState({'passwordTwo': event.target.value})}
          type="password"
          placeholder="Confirm password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        <p>{this.props.error}</p>
      </form>
    )
  }
}


export default SignUpForm;