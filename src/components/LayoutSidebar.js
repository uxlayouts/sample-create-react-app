import React from 'react';
import { renderRoutes } from 'react-router-config';
import { func, shape, arrayOf, string, bool } from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import VertSwitch from './VertSwitch';
import Sidebar from './Sidebar';

// Pure Function - Sidebar Layout
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

// Type Seting With Prop-Types
LayoutSidebar.propTypes = {
  route: shape({
    routes: arrayOf(
      shape({
        path: string,
        component: func,
        name: string,
        exact: bool,
      }),
    ),
  }).isRequired,
  location: shape({}),
};

export default LayoutSidebar;
