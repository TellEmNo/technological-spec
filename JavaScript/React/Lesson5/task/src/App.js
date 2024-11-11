import React, { useContext, useState } from 'react';
import UserContext, { UserProvider } from './contexts/UserContext';
import ThemeContext, { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <div style={{ padding: '20px' }}>
          <Header />
          <Changes />
          <Profile />
          <Footer />
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}

function Changes() {
  const { setUserName } = useContext(UserContext);
  const { toggleTheme } = useContext(ThemeContext);

  const [newName, setNewName] = useState('');

  const handleChangeName = () => {
    setUserName(newName);
    setNewName('');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Введите имя"
      />
      <button onClick={handleChangeName}>Изменить имя</button>
      <button onClick={toggleTheme}>Переключить тему</button>
    </div>
  );
}

export default App;

