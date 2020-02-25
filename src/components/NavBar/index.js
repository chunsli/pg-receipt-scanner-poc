import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import MenuIcon from '@material-ui/icons/Menu';

import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CategoryIcon from '@material-ui/icons/Category';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FeedbackIcon from '@material-ui/icons/Feedback';
import StarsIcon from '@material-ui/icons/Stars';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import UndoIcon from '@material-ui/icons/Undo';
import HistoryIcon from '@material-ui/icons/History';
import { ArrowBackIos as ArrowBackIosIcon } from '@material-ui/icons';

import {
  AppBar,
  Divider,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Hidden,
  IconButton,
  Toolbar
} from "@material-ui/core";
import Link from 'next/link';

import UploadButton from '../UploadButton';
import Router from "next/router";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  bottom: {
    width: 500,
  },
  grow: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

function NavBar(props) {
  const { path } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div />
      <Grid container className={classes.toolbar} alignContent={"flex-end"} justify={"flex-end"}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </Grid>

      <Divider />
      <CardHeader
        avatar={
          <Avatar alt="Norris Fung" src="/static/images/ironman.jpg" aria-label="Norris Fung" className={classes.avatar}>
            NF
          </Avatar>
        }
        title="Norris Fung"
      />
      <Divider />
      <List>
        <Link href="/account">
          <ListItem button key={'Profile'} onClick={handleDrawerToggle}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary={'Profile'}>Profile</ListItemText>
          </ListItem>
        </Link>
        <ListItem button key={'Upload Receipt'}>
          <ListItemIcon><CloudUploadIcon /></ListItemIcon>
          <ListItemText primary={'Upload Receipt'}>Upload Receipt</ListItemText>
        </ListItem>
        <Link href="/redeem">
          <ListItem button key={'Redeem Award'} onClick={handleDrawerToggle}>
            <ListItemIcon><CardGiftcardIcon /></ListItemIcon>
            <ListItemText primary={'Redeem Award'}>Redeem Award</ListItemText>
          </ListItem>
        </Link>
        <ListItem button key={'Category'}>
          <ListItemIcon><CategoryIcon /></ListItemIcon>
          <ListItemText primary={'Category'}>Category</ListItemText>
        </ListItem>
        <Link href="/shop">
          <ListItem button key={'Shopping Cart'} onClick={handleDrawerToggle}>
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary={'Shopping Cart'}>Shopping Cart</ListItemText>
          </ListItem>
        </Link>
        <Link href="/feedback">
          <ListItem button key={'Feedback'} onClick={handleDrawerToggle}>
            <ListItemIcon><FeedbackIcon /></ListItemIcon>
            <ListItemText primary={'Feedback'}>Feedback</ListItemText>
          </ListItem>
        </Link>
        <ListItem button key={'Premium'}>
          <ListItemIcon><StarsIcon /></ListItemIcon>
          <ListItemText primary={'Premium'}>Premium</ListItemText>
        </ListItem>
        <Link href="/history">
          <ListItem button key={'history'} onClick={handleDrawerToggle}>
            <ListItemIcon><HistoryIcon /></ListItemIcon>
            <ListItemText primary={'history'}>History</ListItemText>
          </ListItem>
        </Link>
        <ListItem button key={'Setting'}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary={'Setting'}>Setting</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {path === '/' ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="Back to home"
              edge="start"
              onClick={() => Router.push('/')}
              className={classes.menuButton}
            >
              <UndoIcon />
            </IconButton>
          )}

          <div className={classes.grow} />
          <IconButton
            aria-label="take a snap shot of receipts"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            edge="end"
          >
            <UploadButton />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};


export default NavBar;
