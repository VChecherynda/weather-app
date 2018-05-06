import { connect } from 'react-redux';
import { signOut } from '../store/session/signOut/action';

import SignOut from '../views/SignOut';


function mapDispatchToProps(dispatch) {
  return {
    signOut: (payload) => dispatch(signOut(payload)),
  }
}

export default connect( null, mapDispatchToProps)(SignOut);