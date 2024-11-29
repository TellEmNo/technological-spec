import { all } from 'redux-saga/effects';
import { watchPostsSaga } from './postSaga';

export default function* rootSaga() {
  yield all([watchPostsSaga()]);
}
