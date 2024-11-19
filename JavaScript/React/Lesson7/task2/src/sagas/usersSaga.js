import { call, put, takeEvery } from 'redux-saga/effects';  // Импортируем эффекты из redux-saga
import { fetchUsersApi } from './fetchUsersApi';  // Импортируем API запрос из предыдущего файла
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions';

// Сага, которая будет обрабатывать запрос пользователей
function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsersApi);  // Выполняем асинхронный запрос
    yield put({ type: FETCH_USERS_SUCCESS, users });  // Отправляем данные в Redux store
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, error });  // Отправляем ошибку, если запрос не удался
  }
}

// Слушаем действие FETCH_USERS_REQUEST и запускаем сагу
export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
}
