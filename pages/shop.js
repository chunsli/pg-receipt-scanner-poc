import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SearchBar from '../src/components/SearchBar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  catImg: {
    objectFit: 'cover',
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  catBtn: {
    padding: theme.spacing(1)
  },
  search: {
    padding: theme.spacing(1)
  },
  cat: {
    padding: theme.spacing(1)
  },
  title: {
    textDecoration: 'none',
    flexGrow: 1,
  }
}));

function ShopPage() {
  const classes = useStyles();

  return (
    <Grid container align-content-xs-space-around={'true'}>
      <Grid xs={12} item className={classes.search}>
        <SearchBar />
      </Grid>
      <Grid container direction={'row'} align-content-xs-between={'true'}	>
        <Grid xs={6} item className={classes.catBtn}>
          <Button variant="contained" color="primary" fullWidth>
            Category
          </Button>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Button variant="contained" color="primary" fullWidth>
            Brand
          </Button>
        </Grid>
      </Grid>
      <Grid xs={12} item className={classes.cat}>
        <Link href="#">
          <img src="/static/images/cat3.png" className={classes.catImg} />
          <Grid container>
            <Typography variant="h6" className={classes.title}>
              Fresh Food
            </Typography>
            <NavigateNextIcon fontSize="large" />
          </Grid>
        </Link>
      </Grid>
      <Grid xs={12} item className={classes.cat}>
        <Link href="#">
          <img src="/static/images/cat2.png" className={classes.catImg} />
          <Grid container>
            <Typography variant="h6" className={classes.title}>
              Shampoo & Conditioner
            </Typography>
            <NavigateNextIcon fontSize="large" />
          </Grid>
        </Link>
      </Grid>
      <Grid xs={12} item className={classes.cat}>
        <Link href="#">
          <img src="/static/images/cat1.png" className={classes.catImg} />
          <Grid container>
            <Typography variant="h6" className={classes.title}>
              Detergent
            </Typography>
            <NavigateNextIcon fontSize="large" />
          </Grid>
        </Link>
      </Grid>
    </Grid>
  );
}

ShopPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ShopPage;
