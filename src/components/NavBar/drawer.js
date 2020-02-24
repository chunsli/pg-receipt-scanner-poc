import {CardHeader, Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Link from "next/link";
import PersonIcon from "@material-ui/icons/Person";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import CategoryIcon from "@material-ui/icons/Category";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FeedbackIcon from "@material-ui/icons/Feedback";
import StarsIcon from "@material-ui/icons/Stars";
import HistoryIcon from "@material-ui/icons/History";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import {makeStyles, useTheme, withStyles} from "@material-ui/core/styles";
import connect from "react-redux/es/connect/connect";

const Drawer = () => {
  const drawerWidth = 240;

  const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />
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
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.upload.lineItems,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Drawer));