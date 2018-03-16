import {connect} from 'react-redux';
import { deleteWeatherCard } from '../store/card/actions';

import ListItems from '../views/ListItems';

function mapStateToProps(state) {
  return {
    data: state.addWeatherCard.cities,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      deleteWeatherCard: (deleteCity) => dispatch(deleteWeatherCard(deleteCity))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListItems);