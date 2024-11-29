import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  posts: postReducer, // Подключаем посты
});

export default rootReducer;
