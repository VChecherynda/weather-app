import { connect } from 'react-redux';
import { openDialogWindow } from '../actions';

import Header from '../views/Header';

function mapDispatchToProps(dispatch) {
  return {
    dialogHandlerOpen: () => dispatch(openDialogWindow())
  }
}

export default connect(null, mapDispatchToProps)(Header);