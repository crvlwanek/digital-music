import { GET_SONGS, DELETE_SONG, ADD_SONG, CLEAR_SONGS, GET_PORTFOLIO, GET_USER_PROFILE } from '../actions/types.js';

const initialState = {
  songs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload,
      };
    case GET_PORTFOLIO:
      return {
        ...state,
        songs: action.payload
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        songs: action.payload.songs
      };
    case DELETE_SONG:
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.payload),
      };
    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case CLEAR_SONGS:
      return {
        ...state,
        songs: [],
      };
    default:
      return state;
  }
}