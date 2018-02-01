import { connect } from 'react-redux';
import { AddCityCard, CloseDialogWindow } from '../actions';

import Dialog from '../components/Dialog';

function mapStateToProps(state) {
  return {
    isOpen: state.popUpData.isOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCityCard: (e) => dispatch(AddCityCard(e)),
    dialogHandlerClose: () => dispatch(CloseDialogWindow())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dialog);