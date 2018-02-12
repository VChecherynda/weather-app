import { connect } from 'react-redux';
import { openDialogWindow, refreshPage } from '../actions';

import Header from '../views/Header';

function mapStateToProps(state) {
  return {
    data: state.addWeatherCard.cities,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dialogHandlerOpen: () => dispatch(openDialogWindow()),
    refreshPage: (city) => dispatch(refreshPage(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);