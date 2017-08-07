import React from 'react';
import { renderRoutes } from 'react-router-config';
import { func, shape, arrayOf, string } from 'prop-types';
import './assets/scss/core.css';

const Base = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
);

Base.propTypes = {
  route: shape({
    routes: arrayOf(
      shape({
        path: string,
        component: func,
      }),
    ),
  }).isRequired,
};

export default Base;
