import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './actions/userActions';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);  // Получаем список пользователей из состояния

  const handleAddUser = () => {
    const newUser = { name: 'John Doe' };
    dispatch(addUser(newUser));  // Добавляем пользователя в state
  };

  return (
    <div>
      <button onClick={handleAddUser}>Добавить пользователя</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
