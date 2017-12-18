import React from 'react';
import { renderRoutes } from 'react-router-config';
import { func, shape, arrayOf, string, bool } from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AnimatedSwitch from './AnimatedSwitch';
import Header from './Header';
import Footer from './Footer';

// Pure Function - Full Width Layout
const LayoutFull = ({ route, location }) => (
  <div className="wrapperFull">
    <Header />
    <div className="responsive-container-1">
      <TransitionGroup component="main">
        <AnimatedSwitch key={location.key} location={location}>
          {renderRoutes(route.routes)}
        </AnimatedSwitch>
      </TransitionGroup>
      </div>
    <Footer />
  </div>
);

// Type Seting With Prop-Types
LayoutFull.propTypes = {
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

export default LayoutFull;
