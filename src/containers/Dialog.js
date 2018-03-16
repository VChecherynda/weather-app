import { connect } from 'react-redux';
import { addWeatherCard } from '../store/card/actions';
import { closeDialogWindow } from '../store/dialog/actions';

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