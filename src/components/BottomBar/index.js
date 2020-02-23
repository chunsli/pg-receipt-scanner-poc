import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  BottomNavigationAction,
  BottomNavigation,
} from '@material-ui/core';
import Link from 'next/link';

import { Home } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RedeemIcon from '@material-ui/icons/Redeem';
import UploadButton from '../UploadButton';

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
      }}
      className={classes.root}
    >
      <Link href="/shop">
        <BottomNavigationAction label="Shop" showLabel={true} icon={<ShoppingCartIcon />} />
      </Link>
      <Link href="/index">
        <BottomNavigationAction label="Home" showLabel={true} icon={<Home />} />
      </Link>
      <BottomNavigationAction label="Scanner" showLabel={true} icon={<UploadButton />} />
      <Link href="/redeem">
        <BottomNavigationAction label="Coupons" showLabel={true} icon={<RedeemIcon />} />
      </Link>
    </BottomNavigation>
  );
}