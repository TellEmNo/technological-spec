import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import loggerMiddleware from './middleware/loggerMiddleware';

const store = configureStore({
  reducer: rootReducer,  // Передаем корневой редьюсер
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),  // Подключаем middleware
});

export default store;
