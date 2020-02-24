import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Link from 'next/link';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ProfileTable from '../src/components/ProfileTable'
import { CardContent, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  space: {
    padding: theme.spacing(1)
  },
  card: {
    margin: theme.spacing(1),
    width: '40%',
    textAlign: 'center',
    textDecoration: 'none',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  }
}));

function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <Grid container align-content-xs-space-around={'true'} className={classes.root}>
      <Grid
        justify="center"
        alignItems="center"
        container
        direction="row"
        className={classes.space}
      >
        <Avatar alt="Norris Fung" src="/static/images/ironman.jpg" aria-label="Norris Fung" className={classes.avatar}>
          NF
        </Avatar>
      </Grid>

      <Grid
        justify="center"
        alignItems="center"
        container
        direction="row"
      >
        <Typography variant="h5">
          Norris Fung
        </Typography>
      </Grid>
      <Grid
        justify="center"
        alignItems="center"
        container
        direction="row"
      >
        <Card className={classes.card}>
          <Link href="/redeem" passHref>
            <CardContent>
              <Typography variant="h6">
                20 Points
              </Typography>
            </CardContent>
          </Link>
        </Card>
        <Card className={classes.card}>
          <a href="https://www.pg-o2o.com/hk/" style={{ textDecoration: 'none' }}>
            <CardContent>
              <Typography variant="h6">
                My Coupon
              </Typography>
            </CardContent>
          </a>
        </Card>
      </Grid>
      <Grid
        justify="center"
        alignItems="center"
        container
        direction="row"
      >
        <ProfileTable />
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
