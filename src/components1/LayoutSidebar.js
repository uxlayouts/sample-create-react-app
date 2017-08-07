import React from 'react';
import { renderRoutes } from 'react-router-config';
import { func, shape, arrayOf, string } from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import VertSwitch from './VertSwitch';
import Sidebar from './Sidebar';

const LayoutSidebar = ({ route, location }) => (
  <div className="wrapperSidebar">
    <TransitionGroup component="main" className="responsive-container-1">
      <VertSwitch key={location.key} location={location}>
        {renderRoutes(route.routes)}
      </VertSwitch>
    </TransitionGroup>
  <Sidebar />
  </div>
);

LayoutSidebar.propTypes = {
  route: shape({
    routes: arrayOf(
      shape({
        path: string,
        component: func,
      }),
    ),
  }).isRequired,
  location: shape({}),
};

export default LayoutSidebar;
