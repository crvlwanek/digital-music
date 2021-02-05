import { combineReducers } from 'redux';
import songs from './songs';
import errors from './errors';
import messages from './messages';
import auth from './auth';

const rootReducer = combineReducers({
  errors,
  messages,
  auth,
  songs,
});

export default rootReducer;