import React, { Component } from 'react';
import {
  Redirect,
  Route
} from 'react-router';

import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={ props => {
      return(
        rest.authUser ? (
          <Component { ...props }/>
        ) : (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
        )
      )
    }}/>
  );
}

const mapStateToProps = (state) => {
  return {
    authUser: state.session.authUser,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);