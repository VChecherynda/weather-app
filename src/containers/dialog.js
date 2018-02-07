import { connect } from 'react-redux';
import { addCityCard, CloseDialogWindow } from '../actions';

import Dialog from '../components/Dialog';

function mapStateToProps(state) {
  return {
    isOpen: state.modal.isOpen,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getWeatherAtCity: (city) => {
      dispatch(addCityCard(city))
    },
    dialogHandlerClose: () => dispatch(CloseDialogWindow())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dialog);