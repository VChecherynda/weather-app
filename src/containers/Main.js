import React from 'react';
import {connect} from 'react-redux';

import Home from '../views/Home';

const Main = ({authUser}) =>
  <div>
    { authUser ? <Home /> : null }
  </div>

function mapStateToProps(state) {
  return {
    authUser: state.session.authUser,
  }
}

export default connect(mapStateToProps)(Main);