import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { auth } from '../firebase';
import * as routes from '../constants/routes';

class SignOut extends Component {
  constructor(props) {
    super(props);
  }

  onClick = (event) => {
    console.log(this.props);
    const { history } = this.props;

    auth.doSignOut()
      .then(() => {
        history.push('/');
      })
      .catch(error => {
        console.log(error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <button
      type="button"
      onClick={this.onClick}
    >
      Sign out
    </button>
    )
  }

}
export default withRouter(SignOut);