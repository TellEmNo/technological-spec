import { configureStore } from 'redux';
import counterReducer from './reducer';

const store = configureStore({
  reducer: counterReducer,
});

export default store;
