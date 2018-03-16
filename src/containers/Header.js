import { connect } from 'react-redux';
import { openDialogWindow, refreshPage } from '../store/dialog/actions';

import Header from '../views/Header';

function mapStateToProps(state) {
  return {
    data: state.addWeatherCard.cities,
  };
}

function mapDispatchToProps(dispatch, action) {
  return {
    dialogHandlerOpen: () => dispatch(openDialogWindow(true)),
    refreshPage: (city) => dispatch(refreshPage(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);