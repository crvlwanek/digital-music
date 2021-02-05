import { GET_SONGS, DELETE_SONG, ADD_SONG, CLEAR_SONGS } from '../actions/types.js';

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