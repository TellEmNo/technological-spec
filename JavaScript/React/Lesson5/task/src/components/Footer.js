import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer style={{ backgroundColor: theme === 'светлая' ? '#ddd' : '#444', color: theme === 'светлая' ? '#000' : '#fff', padding: '10px' }}>
      &copy; {new Date().getFullYear()} Мой сайт
    </footer>
  );
}

export default Footer;
