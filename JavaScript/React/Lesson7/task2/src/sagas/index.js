import { all } from 'redux-saga/effects';
import { watchFetchUsers } from './usersSaga';  // Импортируем сагу для пользователей

function* rootSaga() {
  yield all([
    watchFetchUsers(),
  ]);
}

export default rootSaga;
