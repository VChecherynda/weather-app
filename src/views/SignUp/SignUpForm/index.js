import React, { Component } from 'react';

// import { auth } from '../../assets/libs/firebase';
// import * as routes from '../../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
    console.log('sighUp ====>', this.props);
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const { submitSignUpForm } = this.props;

    submitSignUpForm({ email, passwordOne });
    // auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      // .then(authUser => {
      //   this.setState(() => ({ ...INITIAL_STATE }));
      //   history.push(routes.HOME);
      // })
      // .catch(error => {
      //   this.setState(byPropKey('error', error));
      // });

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

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}


export default SignUpForm;