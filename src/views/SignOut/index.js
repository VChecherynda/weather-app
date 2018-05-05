import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { signOut } from '../../store/signOut/action';

class SignOut extends Component {

  onClick = () => {
    console.log('signOut view',this.props);
    this.props.signOut();
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