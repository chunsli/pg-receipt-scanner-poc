import React from 'react'
import PropTypes from 'prop-types';

import TokensTable from '../src/containers/TokensTable';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  table: {
    padding: theme.spacing(1)
  },
  catBtn: {
    padding: theme.spacing(1)
  },
}));

function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid xs={12} className={classes.table}>
        <TokensTable />
      </Grid>
    </Grid>
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
