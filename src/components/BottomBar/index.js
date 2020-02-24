import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  BottomNavigationAction,
  BottomNavigation,
} from '@material-ui/core';

import { Home } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RedeemIcon from '@material-ui/icons/Redeem';
import UploadButton from '../UploadButton';

import Router from 'next/router';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if (newValue === 'home') {
          Router.push('/');
        } else if (newValue !== "scanner") {
          Router.push(newValue);
        }
      }}
      className={classes.root}
    >
      <BottomNavigationAction label="Shop" showLabel={true} icon={<ShoppingCartIcon />} value={"/shop"} />
      <BottomNavigationAction label="Home" showLabel={true} icon={<Home />} value={"home"} />
      <BottomNavigationAction label="Scanner" showLabel={true} icon={<UploadButton />} value={"scanner"} />
      <BottomNavigationAction label="Coupons" showLabel={true} icon={<RedeemIcon />}value={"/redeem"} />
    </BottomNavigation>
  );
}