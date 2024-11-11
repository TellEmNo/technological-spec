import React, { createContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) { // ?
  const [userName, setUserName] = useState('Гость');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  ); // ?
}

export default UserContext; 
// Мне интересно почему создается функция UserProvider, а экспортируется UserContext. Еще не понятно, как работает children