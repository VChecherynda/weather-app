import React, { Component } from 'react';

import './style.css';

class SidebarMenu extends Component {
  render() {
    const { isOpen, closeSidebarMenu } = this.props;
    return (
      <div className={isOpen ? 'sidebar open' : 'sidebar hide'}>
        <span
          onClick={() => closeSidebarMenu(false)}
          className="close"
        />
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">LOGIN</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">CONTACT</a></li>
          <li><a href="">SEARCH</a></li>
        </ul>
      </div>
    )
  }
}

export default SidebarMenu;