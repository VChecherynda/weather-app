import { connect } from 'react-redux';
import { OpenDialogWindow } from '../actions';

import Header from '../components/Header';

function mapDispatchToProps(dispatch) {
  return {
    dialogHandlerOpen: () => dispatch(OpenDialogWindow())
  }
}

export default connect(null, mapDispatchToProps)(Header);