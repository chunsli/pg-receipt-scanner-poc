import { UPLOAD_IMAGE, UPLOAD_LOADING, CLEAR_IMAGE, UPDATE_TOKEN, OPEN_ALERT, CLOSE_ALERT } from '../constants'
import { stringify } from 'qs';
import axios from 'axios';
import _ from 'lodash';
import Router from 'next/router';

export const request = (method, api, params) => {
  const query =
    !_.isNil(params) && method === 'get'
      ? `?${stringify(params, { arrayFormat: 'brackets' })}`
      : '';
  const config = method === 'delete' ? { data: params } : params;

  if (!process.browser) {
    return axios[method](`${api}${query}`, config);
  }
  return axios[method](`${api}${query}`, config);
};

export const scanReceipt = async (dispatch, params) => {
  dispatch({
    type: CLEAR_IMAGE,
    data: true,
  })

  dispatch({
    type: UPLOAD_LOADING,
    data: true,
  })

  await Router.push('/upload');


  const formData = new FormData();
  formData.append('file', params);

  const url = 'https://asia-east2-pandg-268816.cloudfunctions.net/process';
  const config = {
    method: 'POST',
    body: formData,
  };

  const myRequest = new Request(url, config);

  const tokenResult = await fetch(myRequest)
    .then(function(response) {
      return response.json();
    })
    .catch(function(e){
      console.error(e);
    });

/*  const tokenResult = {
    "message": "SUCCESS: Image uploaded successfully",
    "status": "success",
    "status_code": 2,
    "token": "CDZq8d6Y1dxD32df",
    "success": true,
    "code": 200,
    "duplicate": true,
    "duplicateToken": "Z1WtHisqOx7cK7Mo"
  };*/

  dispatch({
    type: UPDATE_TOKEN,
    data: Object.assign({}, tokenResult, { time: new Date().toLocaleString() }),
  });

  const data = await getResults(tokenResult);

  dispatch({
    type: UPLOAD_IMAGE,
    data,
  });
  dispatch({
    type: UPLOAD_LOADING,
    data: false,
  })
}

const delay = (time) => {
  return new Promise(function(resolve) {
    setTimeout(resolve, time)
  });
}

const getResults = async (tokenRes) => {
  const url = 'https://asia-east2-pandg-268816.cloudfunctions.net/result';
  let resultResponse;
  do {
    resultResponse = await request('get', url, { token: tokenRes.token })
      .catch(function(e){
        console.log(e);
      });
    if(!resultResponse || (resultResponse && resultResponse.data && resultResponse.data.status !== 'done')) {
      await delay(5000);
    } else {
      return resultResponse.data.result;
    }

  } while (!resultResponse || (resultResponse && resultResponse.data && resultResponse.data.status !== 'done'))

};

export const viewData = async (dispatch, tokenResult) => {
  dispatch({
    type: CLEAR_IMAGE,
    data: true,
  })
  dispatch({
    type: UPLOAD_LOADING,
    data: true,
  })

  await Router.push('/upload');

  const data = await getResults(tokenResult);

  dispatch({
    type: UPLOAD_IMAGE,
    data,
  });
  dispatch({
    type: UPLOAD_LOADING,
    data: false,
  })
}

export const openAlert = (dispatch) => {
  dispatch({
    type: OPEN_ALERT,
    data: true,
  })
}

export const closeAlert = (dispatch) => {
  dispatch({
    type: CLOSE_ALERT,
    data: false,
  })
}