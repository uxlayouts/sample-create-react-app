import React from 'react';
import { renderRoutes } from 'react-router-config';
import { func, shape, arrayOf, bool, string } from 'prop-types';

// Pure Function - Empty Root Layout
const Base = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
);

// Type Seting With Prop-Types
Base.propTypes = {
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
};

export default Base;
