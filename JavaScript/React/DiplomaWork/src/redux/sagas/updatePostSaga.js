import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { updatePost, updatePostFailure } from '../actions/updatePostActions';

function* updatePostSaga(action) {
  try {
    const response = yield call(
      axios.put, 
      `https://jsonplaceholder.typicode.com/posts/${action.payload.postId}`,
      action.payload.updatedData
    );
    yield put(updatePost(response.data));
  } catch (error) {
    yield put(updatePostFailure(error.message));
  }
}

export function* watchUpdatePostSaga() {
  yield takeEvery('UPDATE_POST_REQUEST', updatePostSaga);
}
