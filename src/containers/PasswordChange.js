import { connect } from 'react-redux';
import { submitForm } from '../store/passwordChange/actions';

import PasswordChangeForm from '../views/PasswordChange/PasswordChangeForm';

function mapStateToProps(state) {
  return {
    error: state.session.passwordReset.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitForm: (payload) => dispatch(submitForm(payload)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(PasswordChangeForm);