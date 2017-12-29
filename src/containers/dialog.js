import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from '../components/Dialog';

function mapStateToProps(state) {
    return {
      isOpen: state.popUpData.isOpen
    }
  }

export default connect(mapStateToProps)(Dialog);