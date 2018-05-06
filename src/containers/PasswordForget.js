import { connect } from 'react-redux';
import { submitForm } from '../store/session/passwordForget/actions';

import PasswordForget from '../views/PasswordForget/PasswordForgetForm';

function mapStateToProps(state) {
  return {
    error: state.session.error,
    isResetPassword: state.session.isResetPassword,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitForm: (payload) => dispatch(submitForm(payload)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(PasswordForget);