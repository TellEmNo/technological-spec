import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // Импортируем Provider для подключения Redux
import App from './App';
import store from './store';  // Импортируем Redux store

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);