import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { OpenInNew as OpenInNewIcon } from '@material-ui/icons'

import {
  Table,
  TableBody,
  Paper,
  Typography,
  Toolbar,
  CircularProgress
} from '@material-ui/core';

const styles = (theme) => ({
  table: {
    minWidth: 650,
  },
  title: {
    flex: '1 1 100%',
  },
  spinner: {
    textAlign: 'center !important',
  }
});

const uniqueKeys = data => Object.keys(data.reduce(function(result, obj) {
  return Object.assign(result, obj);
}, {}));

const toTitleCase = str => str
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase());

const ResultTable = ({ data, classes, key, columns, title, isLoading, rowAction }) => {

  const headers = columns || uniqueKeys(data);

  return (
    <Paper className={classes.paper}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" id="tableTitle">
          {title}
        </Typography>
      </Toolbar>
      <TableContainer key={key}>
        <Table size="small" aria-label="a dense table">
          {isLoading ? (
            <caption className={classes.spinner}>
              <CircularProgress/>
              <Typography className={classes.title} variant="h6">
                Analyzing Receipts...
              </Typography>
            </caption>) : null
          }
          <TableHead>
            <TableRow>
              {headers.map((header, i) => (<TableCell key={`${i}-header`}>{toTitleCase(header)}</TableCell>))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={`${i}-row`}>
                {headers.map((header, j) => {
                  let val;
                  try {
                    val = JSON.stringify(row[header])
                  } catch(e) {
                    console.log(e);
                  }
                  if(typeof row[header] === 'string' || typeof row[header] === 'number') {
                    return (<TableCell key={`${i}-column-${j}`}>{row[header] || ''}</TableCell>)
                  } else if (header === 'action') {
                    return (
                      <TableCell key={`${i}-column-${j}`}>
                        <OpenInNewIcon
                          onClick={() => rowAction(row)}
                        />
                      </TableCell>
                    )
                  } else if (val) {
                    return (<TableCell key={`${i}-column-${j}`}>{val || ''}</TableCell>)
                  } else {
                    return (<TableCell key={`${i}-column-${j}`}>{}</TableCell>)
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default withStyles(styles, { withTheme: true })(ResultTable)