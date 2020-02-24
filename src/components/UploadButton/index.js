import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { green } from '@material-ui/core/colors';

import { withStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { scanReceipt } from '../../actions';
import Alert from "../Alert";
import Router from 'next/router';

const styles = (theme) => ({
  input: {
    display: 'none'
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
});

class MediaCapture extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    open: false,
  }

  handleCapture = async (e) => {
    const params = e.target.files[0];
    this.fileInput.value = "";

    await this.props.handleUpload(params);
    this.handleOpen();
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };



  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <Fragment>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-photo"
          onChange={this.handleCapture}
          type="file"
          ref={ref=> this.fileInput = ref}
        />
        <label htmlFor="icon-button-photo">
          <PhotoCamera />
        </label>
        <Alert
          handleClose={this.handleClose}
          open={open}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.upload.data,
    isLoading: state.upload.isLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleUpload: params => scanReceipt(dispatch, params),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(MediaCapture));