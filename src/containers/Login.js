import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Login from '../views/Login';

function mapStateToProps(state) {
  return {
    testData: 123,
  };
}

export default withRouter(connect(mapStateToProps)(Login));