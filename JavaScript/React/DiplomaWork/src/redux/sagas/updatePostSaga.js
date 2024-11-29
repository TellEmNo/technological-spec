import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { updatePost, updatePostFailure } from '../actions/updatePostActions'; // Используем updatePost

function* updatePostSaga(action) {
  try {
    const response = yield call(
      axios.put, 
      `https://jsonplaceholder.typicode.com/posts/${action.payload.postId}`,
      action.payload.updatedData
    );
    yield put(updatePost(response.data)); // Отправляем обновленные данные
  } catch (error) {
    yield put(updatePostFailure(error.message)); // Если ошибка, диспатчим updatePostFailure
  }
}

export function* watchUpdatePostSaga() {
  yield takeEvery('UPDATE_POST_REQUEST', updatePostSaga);
}
