import { connect } from 'react-redux';
import { AddCityCard, CloseDialogWindow } from '../actions';
import getWeatherData from '../fetchers/weather';

import Dialog from '../components/Dialog';

function mapStateToProps(state) {
  console.log('====>',state)
  return {
    isOpen: state.modal.isOpen,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCityCard: (e) => dispatch(AddCityCard(e)),
    dialogHandlerClose: () => dispatch(CloseDialogWindow())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dialog);