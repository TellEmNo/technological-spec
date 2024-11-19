import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from './actions'; // Импортируем действие для запроса пользователей

const App = () => {
  const dispatch = useDispatch();
  
  // Получаем состояние пользователей из Redux store
  const { users, loading, error } = useSelector((state) => state.users);

  // Функция для обработки клика по кнопке
  const handleLoadUsers = () => {
    dispatch(fetchUsersRequest()); // Запускаем сагу для получения пользователей
  };

  return (
    <div className="App">
      <h1>Список пользователей</h1>

      <button onClick={handleLoadUsers} disabled={loading}>
        {loading ? 'Загрузка...' : 'Загрузить пользователей'}
      </button>

      {error && <p style={{ color: 'red' }}>Ошибка: {error.message}</p>}

      {loading ? (
        <p>Загружаем данные...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.username})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
