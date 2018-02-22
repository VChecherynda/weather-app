import React from 'react';

import Header from '../../containers/Header';
import Dialog from '../../containers/Dialog';
import ListItems from '../../containers/ListItems';
import SidebarMenu from '../../containers/SIdebarMenu';

const Home = () => (
  <div className="App">
    <SidebarMenu />
    <Header />
    <Dialog />
    <ListItems />
  </div>
)

export default Home;