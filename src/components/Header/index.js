import React, { Component } from 'react';
import './style.css'

class Header extends Component {
  render() {
    const { dialogHandler } = this.props;

    return (
      <header className="header">
        <h1 className="headerTitle">Weather PWA</h1>
        <div className="headerBtnWrap">
          <button id="butRefresh"  className="headerButton">Refresh</button>
          <button id="butAdd" onClick={() => dialogHandler()} className="headerButton">Add</button>
        </div>
      </header>
    )
  }
}

export default Header;