import {connect} from 'react-redux';

import Main from '../components/Main';

function mapStateToProps(state) {
  return {
    data: state.addWeatherCard.responseData,
  };
}

export default connect(mapStateToProps)(Main);