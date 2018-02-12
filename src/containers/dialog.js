import { connect } from 'react-redux';
import { addCityCard, closeDialogWindow } from '../actions';

import Dialog from '../views/Dialog';

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
    dialogHandlerClose: () => {
      dispatch(closeDialogWindow())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dialog);