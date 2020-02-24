import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Router from 'next/router';

export default function AlertDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Congratulations"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You have scanned your first receipt and earn 10pts! Let's scan it again later!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Confirm
        </Button>
        <Button onClick={() => {
          handleClose();
          return Router.push("/redeem");
        }} color="primary" autoFocus>
          Redeem
        </Button>
      </DialogActions>
    </Dialog>
  );
}