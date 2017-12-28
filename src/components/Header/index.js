import React, { Component } from 'react';
import './style.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">Weather PWA</h1>
        <button id="butRefresh" className="headerButton">Refresh</button>
        <button id="butAdd" className="headerButton">Add</button>
      </header>
    )
  }
}

export default Header;