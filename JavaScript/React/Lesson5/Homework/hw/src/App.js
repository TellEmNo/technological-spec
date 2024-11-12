import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ThemeSwitcher from './ThemeSwitcher';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeSwitcher />
    </Provider>
  );
};

export default App;
