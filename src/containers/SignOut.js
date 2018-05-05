import { connect } from 'react-redux';
import { signOut } from '../store/signOut/action';

import SignOut from '../views/SignOut';


function mapDispatchToProps(dispatch) {
  return {
    signOut: (payload) => dispatch(signOut(payload)),
  }
}

export default connect( null, mapDispatchToProps)(SignOut);