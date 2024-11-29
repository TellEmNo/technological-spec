import { all } from 'redux-saga/effects';
import { watchPostsSaga } from './postSaga';
import { watchUpdatePostSaga } from './updatePostSaga';

export default function* rootSaga() {
  yield all([watchPostsSaga(), watchUpdatePostSaga()]);
}
