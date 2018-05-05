import { connect } from 'react-redux';
import { submitSignUpForm } from '../store/signUp/actions';

import SignUp from '../views/SignUp/SignUpForm';

function mapStateToProps(state) {
  return {
    error: state.session.signUp.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitSignUpForm: (payload) => dispatch(submitSignUpForm(payload)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(SignUp);