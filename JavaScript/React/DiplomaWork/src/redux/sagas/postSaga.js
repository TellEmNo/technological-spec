import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchPostsSuccess, fetchPostsFailure } from '../actions/postActions';

// В Saga ошибки обрабатываются в самом генераторе через put с экшеном для ошибки
function* fetchPostsSaga() {
  try {
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

// Вариант с Redux Saga: генератор управляет побочными эффектами и асинхронными запросами
export function* watchPostsSaga() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPostsSaga);
}
