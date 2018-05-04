import React, { Component } from 'react';

import { connect } from 'react-redux';

const PrivateRouteComponent = (props) => {
  console.log('PrivateRouteComponent', props);
  return (
    <div>Test</div>
    // <Route {...rest} render={props => (
    //   fakeAuth.isAuthenticated ? (
    //     <Component {...props}/>
    //   ) : (
    //     <Redirect to={{
    //       pathname: '/login',
    //       state: { from: props.location }
    //     }}/>
    //   )
    // )}/>
  );
}


const mapStateToProps = (state) => {
  return {
    authUser: state.session.authUser,
  };
};

export default connect(mapStateToProps, null)(PrivateRouteComponent);