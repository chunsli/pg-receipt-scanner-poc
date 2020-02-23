import React from 'react';
import PropTypes from 'prop-types';
import HomePage from '../src/containers/homepage';

function ResponsiveDrawer() {

  return (
    <HomePage />
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ResponsiveDrawer;
