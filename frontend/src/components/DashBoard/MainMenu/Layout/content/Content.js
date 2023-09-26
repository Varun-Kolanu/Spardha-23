import React, { useState } from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import { Outlet } from 'react-router';
import './Content.css';
// import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Topbar from './Topbar';
import { EventContext } from '../../../../../contexts/EventContext';

const Content = ({ sidebarIsOpen, toggleSidebar }) => {
  const [getEventCount, setGetEventCount] = useState(0);
  return(
  <EventContext.Provider value={{ getEventCount, setGetEventCount }}>
    <Container
      fluid
      className={classNames('content_db', { 'is-open': sidebarIsOpen })}
    >
      <Topbar toggleSidebar={toggleSidebar} />
      <Outlet />
    </Container>
  </EventContext.Provider>);
};

export default Content;
