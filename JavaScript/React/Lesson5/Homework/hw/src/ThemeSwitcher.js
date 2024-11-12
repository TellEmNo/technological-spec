import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './actions';
import { Button } from '@mui/material';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{
      height: 'auto',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
    }}>
      <h1>{theme === 'light' ? 'Светлая тема' : 'Темная тема'}</h1>
      <Button variant="contained" color={theme === 'light' ? 'error' : 'success'} onClick={handleToggleTheme}>Переключить тему</Button>
    </div>
  );
};

export default ThemeSwitcher;
