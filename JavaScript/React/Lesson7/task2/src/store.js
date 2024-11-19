import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Импортируем корневой редьюсер
import rootSaga from './sagas'; // Импортируем корневую сагу

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Подключаем Redux Saga middleware
});

sagaMiddleware.run(rootSaga); // Запускаем сагу

export default store;
