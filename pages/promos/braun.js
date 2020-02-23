import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  catImg: {
    objectFit: 'cover',
    width: '100%',
  },
  title: {
    textDecoration: 'none',
    flexGrow: 1,
  }
}));

function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <Grid container align-content-xs-space-around={'true'}>
      <Grid xs={12} item className={classes.cat}>
        <Link href="https://o2o-pg.com/hk/58/o2o-living-artist-hk-hns?utm_source=fb&utm_medium=social&utm_campaign=jas19&utm_content=sep13-perfume-photo">
          <img src="/static/images/slider1.png" className={classes.catImg} />
        </Link>
      </Grid>
      <Grid xs={12} item className={classes.cat}>
        <img src="/static/images/banner1.png" className={classes.catImg} />
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
