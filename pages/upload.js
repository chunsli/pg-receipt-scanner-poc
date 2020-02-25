import React from 'react'
import PropTypes from 'prop-types';

import MetaTable from '../src/containers/MetaDataTable';
import LineItemsTable from '../src/containers/LineItemsTable';
import SummaryTable from '../src/containers/SummaryTable';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Home as HomeIcon, Redeem as RedeemIcon } from '@material-ui/icons';

import { connect } from 'react-redux';
import {openAlert, scanReceipt} from "../src/actions";

import Router from 'next/router';

const useStyles = makeStyles(theme => ({
  table: {
    padding: theme.spacing(1)
  },
  catBtn: {
    padding: theme.spacing(1)
  },
}));

function ResponsiveDrawer({ handleOpenAlert }) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container direction={'row'} align-content-xs-between={'true'}	>
        <Grid xs={6} item className={classes.catBtn}>
          <Button variant="outlined" color="primary" fullWidth startIcon={<HomeIcon />} onClick={() => {
            Router.push('/');
            return handleOpenAlert();
          }}>
            Home
          </Button>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Button variant="outlined" color="primary" fullWidth startIcon={<RedeemIcon />} onClick={() => Router.push('/redeem')}>
            Redeem
          </Button>
        </Grid>
      </Grid>
      <Grid xs={12} item className={classes.table}>
        <MetaTable />
      </Grid>
      <Grid xs={12} item className={classes.table}>
        <SummaryTable />
      </Grid>
      <Grid xs={12} item className={classes.table}>
        <LineItemsTable />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleOpenAlert: () => openAlert(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponsiveDrawer);
