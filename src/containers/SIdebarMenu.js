import {connect} from 'react-redux';
import { closeSidebarMenu } from '../actionsСreators';

import SidebarMenu from '../views/SidebarMenu';

function mapStateToProps(state) {
  return {
    isOpen: state.sidebar.isOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeSidebarMenu: (isOpen) => dispatch(closeSidebarMenu(isOpen))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SidebarMenu);