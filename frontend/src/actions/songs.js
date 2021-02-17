import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_SONGS, DELETE_SONG, ADD_SONG, GET_PORTFOLIO, GET_USER_PROFILE } from './types';

// GET SONGS
export const getSongs = () => (dispatch, getState) => {
  axios
    .get('/api/songs/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SONGS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// GET PORTFOLIO
export const getPortfolio = () => (dispatch, getState) => {
  axios
    .get('/api/portfolio/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PORTFOLIO,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// GET USER PROFILE
export const getUserProfile = (username) => (dispatch, getState) => {
  axios
    .get(`/api/auth/users/${username}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_USER_PROFILE,
        payload: res.data,
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// DELETE SONG
export const deleteSong = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/songs/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteSong: 'Song Deleted' }));
      dispatch({
        type: DELETE_SONG,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD SONG
export const addSong = (song) => (dispatch, getState) => {
  axios
    .post('/api/portfolio/', song, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addSong: 'Song Added' }));
      dispatch({
        type: ADD_SONG,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};