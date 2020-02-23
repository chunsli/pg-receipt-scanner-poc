import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {withStyles} from '@material-ui/core/styles';
import ResultTable from '../../components/ResultTable';

const styles = (theme) => ({
  table: {
    minWidth: 650,
  },
});

const columns = [
  'descClean',
  'qty',
  'price',
  'lineTotal',
];

function toTitleCase(str) {
  return str
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
}

const createRows = (obj) => Object
  .keys(obj)
  .map(function(key) {
      if (Array.isArray(obj[key])) {
        return { name: toTitleCase(key), value: obj[key].join(' ')};
      }
    return { name: toTitleCase(key), value: obj[key] };
  })
  .filter(x => (x && x.value && (typeof x.value === 'string' || typeof x.value === 'number')));

const LinteItemsTable = ({ data, isLoading }) => {
  const classes = styles();

  return (
    <ResultTable
      key={'lineItems'}
      data={data}
      columns={columns}
      isLoading={isLoading}
      title={"Receipt Summary"}
    />
  );
}


const mapStateToProps = (state, ownProps) => {
  return {
    data: state.upload.summaryItems,
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
)(withStyles(styles, { withTheme: true })(LinteItemsTable));