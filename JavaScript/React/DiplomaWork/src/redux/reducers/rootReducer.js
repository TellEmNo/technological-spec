// src/redux/reducers/rootReducer.js
import { combineReducers } from 'redux';
import postReducer from './postReducer';
import updatePostReducer from './updatePostReducer'; // Подключаем редьюсер для обновления поста

const rootReducer = combineReducers({
  posts: postReducer,
  updatedPost: updatePostReducer,  // Добавляем редьюсер для обновления поста
});

export default rootReducer;
