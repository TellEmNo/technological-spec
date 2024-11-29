import { combineReducers } from 'redux';
import postReducer from './postReducer';
import updatePostReducer from './updatePostReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  updatedPost: updatePostReducer,
});

export default rootReducer;
