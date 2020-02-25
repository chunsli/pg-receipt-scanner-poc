import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { green } from '@material-ui/core/colors';

import { withStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Alert from "../Alert";

import { closeAlert, scanReceipt } from '../../actions';

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
  };

  render() {
    const { classes, open, handleClose } = this.props;
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
          handleClose={handleClose}
          open={open}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.alert
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleUpload: params => scanReceipt(dispatch, params),
    handleClose: () => closeAlert(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(MediaCapture));