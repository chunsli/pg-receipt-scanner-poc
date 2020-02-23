import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {withStyles} from '@material-ui/core/styles';
import ResultTable from '../../components/ResultTable';

const styles = (theme) => ({
  table: {
    maxWidth: '100%',
  },
});

const columns = [
  'name',
  'value'
];

const toTitleCase = str => str
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase());

const createRows = (obj) => Object
  .keys(obj)
  .map(function(key) {
    /*    if (Array.isArray(obj[key])) {
          return { name: toTitleCase(key), value: obj[key].join(' ')};
        }*/
    return { name: toTitleCase(key), value: obj[key] };
  })
  .filter(x => (x && x.value && (typeof x.value === 'string' || typeof x.value === 'number')));

const MetaDataTable = ({ data, isLoading }) => {
  const classes = styles();

  return (
    <ResultTable
      key={'meta'}
      data={data}
      columns={columns}
      title={"Receipt Meta Data"}
      isLoading={isLoading}
    />
  );
}


const mapStateToProps = (state, ownProps) => {
  return {
    data: createRows(state.upload.data),
    isLoading: state.upload.isLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(MetaDataTable));