import React, { Component } from 'react';
import About from '../About';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/about'>About</Link>
        </ul>
      </div>
    )
  }
}

export default SidebarMenu;