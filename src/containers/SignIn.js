import { connect } from 'react-redux';
import { submitForm } from '../store/signIn/actions';

import SignIn from '../views/SignIn/SignInForm';

function mapStateToProps(state) {
  return {
    error: state.session.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitForm: (payload) => dispatch(submitForm(payload)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(SignIn);