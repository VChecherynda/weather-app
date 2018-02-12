import {connect} from 'react-redux';

import ListItems from '../views/ListItems';

function mapStateToProps(state) {
  return {
    data: state.addWeatherCard.cities,
  };
}

export default connect(mapStateToProps)(ListItems);