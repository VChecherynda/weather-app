import { connect } from 'react-redux';
import { addWeatherCard, closeDialogWindow } from '../actionsСreators';

import Dialog from '../views/Dialog';

function mapStateToProps(state) {
  return {
    isOpen: state.modal.isOpen,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getWeatherAtCity: (city) => dispatch(addWeatherCard(city)),
    dialogHandlerClose: () => dispatch(closeDialogWindow(false)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dialog);