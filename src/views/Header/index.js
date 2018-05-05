import React, { Component } from 'react';
import { listOfCities } from '../../store/api/dataCities';
import SignOut from '../../containers/SignOut';

import '../../assets/styles/Header/style.css'

const Header = (props) => {
  const { dialogHandlerOpen, openSidebarMenu, refreshPage } = props;

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

export default Header;