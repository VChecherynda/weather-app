import { connect } from 'react-redux';
import { AddWeatherCard, CloseDialogWindow } from '../actions';

import Dialog from '../components/Dialog';

function mapStateToProps(state) {
  return {
    isOpen: state.popUpData.isOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addAnotherCity: () => dispatch(AddWeatherCard()),
    dialogHandlerClose: () => dispatch(CloseDialogWindow())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dialog);