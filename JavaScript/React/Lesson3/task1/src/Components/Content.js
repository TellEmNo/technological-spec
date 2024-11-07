import React from 'react';
import './contentStyle.css';

export default function Content({ theme }) {
  const backgroundColor = theme === 'light' ? '#fff' : '#082c34';
  const color = theme === 'light' ? '#000' : '#fff';

  return (
    <div className={`content ${theme}`} style={{ backgroundColor, color }}>
      <p>This is the {theme} theme!</p>
    </div>
  );
}
