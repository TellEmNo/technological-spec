import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import ThemeContext from '../contexts/ThemeContext';

function Profile() {
  const { userName } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === 'светлая' ? '#fff' : '#333', color: theme === 'светлая' ? '#000' : '#fff', padding: '10px' }}>
      <h2>Профиль пользователя</h2>
      <p>Имя: {userName}</p>
      <p>Текущая тема: {theme}</p>
    </div>
  );
}

export default Profile;
