import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchPostsSuccess, fetchPostsFailure } from '../actions/postActions';

// Сага для запроса постов
function* fetchPostsSaga() {
  try {
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`); // Запросим только 10 постов
    yield put(fetchPostsSuccess(response.data)); // Передаем данные
  } catch (error) {
    yield put(fetchPostsFailure(error.message)); // Если ошибка, передаем ее
  }
}

// Слушаем запросы на получение постов
export function* watchPostsSaga() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPostsSaga);
}
