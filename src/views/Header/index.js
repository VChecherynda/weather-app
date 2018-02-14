import React, { Component } from 'react';

import './style.css'

class Header extends Component {
  render() {
    const { dialogHandlerOpen, refreshPage, listOfCities } = this.props;

    console.log(listOfCities[0].value);

    return (
      <header className="header">
        <h1 className="headerTitle">Weather PWA</h1>
        <div className="headerBtnWrap">

          <button
            id="butRefresh"
            onClick={() => refreshPage(listOfCities[0].value)}
            className="headerButton"
          >
            Refresh
          </button>

          <button
            id="butAdd"
            onClick={() => dialogHandlerOpen()}
            className="headerButton"
          >
            Add
          </button>

        </div>
      </header>
    )
  }
}

export default Header;