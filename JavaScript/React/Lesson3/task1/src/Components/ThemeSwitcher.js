// Создайте компонент ThemeSwitcher. Этот компонент будет
// содержать кнопку, при нажатии на которую будет меняться
// тема интерфейса (светлая/темная).
// ● Используйте useState для управления текущей темой. Храните
// состояние текущей темы в компоненте ThemeSwitcher.
// Состояние может быть простой строкой, например, "light" или
// "dark".
// ● Передайте текущую тему в виде пропса в другой компонент,
// который изменит свой стиль в зависимости от полученной
// темы. Например, создайте компонент Content, который
// изменяет свой фоновый цвет в зависимости от темы.
// ● Добавьте логику для переключения темы в ThemeSwitcher. При
// нажатии на кнопку должно происходить переключение между
// "light" и "dark" состояниями, и это изменение должно
// отражаться в компоненте Content.

import React, { useState } from 'react';
import { Button } from '@mui/material';
import Content from './Content';
import './contentStyle.css';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Button onClick={toggleTheme} variant="contained">
        Toggle Theme
      </Button>
      <Content theme={theme} />
    </div>
  );
}