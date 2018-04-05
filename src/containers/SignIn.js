import { connect } from 'react-redux';
import { submitForm } from '../store/signIn/actions';

import SignIn from '../views/SignIn';

function mapDispatchToProps(dispatch) {
  return {
    submitForm: (payload) => dispatch(submitForm(payload)),
  }
}

export default connect( null, mapDispatchToProps)(SignIn);