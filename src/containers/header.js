import { connect } from 'react-redux';
import { openDialogWindow, openSidebarMenu, refreshPage } from '../actionsСreators';

import Header from '../views/Header';

function mapStateToProps(state) {
  return {
    data: state.addWeatherCard.cities,
  };
}

function mapDispatchToProps(dispatch, action) {
  return {
    dialogHandlerOpen: () => dispatch(openDialogWindow(true)),
    openSidebarMenu: (isOpen) => dispatch(openSidebarMenu(isOpen)),
    refreshPage: (city) => dispatch(refreshPage(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);