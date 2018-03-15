import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { firebase } from '../assets/libs/firebase';
import * as routes from '../constants/routes';

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUSer => {
        if(!authCondition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      })
    }

    render() {
      return this.props.authUser ? <Component /> : null;
    }
  }

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  })

  return compose(
    withRouter,
    connect(mapStateToProps)
  )(WithAuthorization);
}

export default withAuthorization;