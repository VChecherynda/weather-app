import React, { Component } from 'react';
import './style.css'

class Header extends Component {
  render() {
    const { dialogHandlerOpen } = this.props;

    return (
      <header className="header">
        <h1 className="headerTitle">Weather PWA</h1>
        <div className="headerBtnWrap">
          <button id="butRefresh"  className="headerButton">Refresh</button>
          <button id="butAdd" onClick={() => dialogHandlerOpen()} className="headerButton">Add</button>
        </div>
      </header>
    )
  }
}

export default Header;