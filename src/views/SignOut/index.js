import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SignOut extends Component {

  onClick = () => {
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