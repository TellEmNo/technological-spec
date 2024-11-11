import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function Header() {
  const { userName } = useContext(UserContext);

  return <header>Привет, {userName}!</header>;
}

export default Header;
