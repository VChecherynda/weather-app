import React, { Component } from 'react';
import { listOfCities } from '../../sagas/api/dataCities';
import SignOut from '../../components/SignOut';

import './style.css'

class Header extends Component {
  render() {
    const { dialogHandlerOpen, openSidebarMenu, refreshPage } = this.props;

    return (
      <header className="header">
        <span
          onClick={() => openSidebarMenu(true)}
          className="hamburger"
        />
        <h1 className="headerTitle">Weather PWA</h1>
        <div className="headerBtnWrap">
          <SignOut />

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