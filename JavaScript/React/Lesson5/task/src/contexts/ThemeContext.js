import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('светлая');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'светлая' ? 'темная' : 'светлая'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;