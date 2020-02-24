import React from 'react'
import PropTypes from 'prop-types';

import TokensTable from '../src/containers/TokensTable';
import LineItemsTable from '../src/containers/LineItemsTable';
import SummaryTable from '../src/containers/SummaryTable';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Home as HomeIcon, Redeem as RedeemIcon } from '@material-ui/icons';

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
