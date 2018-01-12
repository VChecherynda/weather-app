import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CloseDialogWindow } from '../actions';

import Dialog from '../components/Dialog';

function mapStateToProps(state) {
  return {
    isOpen: state.popUpData.isOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dialogHandlerClose: () => dispatch(CloseDialogWindow())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dialog);