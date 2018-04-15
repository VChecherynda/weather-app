import React, { Component } from 'react';

const INITIAL_STATE = {
    email: '',
  };

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    const { submitForm } = this.props;

    submitForm({ email })

    // auth.doPasswordReset(email)
    //   .then(() => {
    //     this.setState(() => ({ ...INITIAL_STATE }));
    //   })
    //   .catch(error => {
    //     this.setState(byPropKey('error', error));
    //   });

    event.preventDefault();
  }

  render() {
    const {
      email,
    } = this.state;

    const { isResetPassword, error } = this.props;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          onChange={event => this.setState({'email': event.target.value})}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        { isResetPassword && <p>Password is send to your email</p> }

       <p>{error}</p>

      </form>
    );
  }
}

export default PasswordForgetForm;