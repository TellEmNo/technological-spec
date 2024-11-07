// 1. Разработайте компонент Counter, который отображает число и
// две кнопки: одна для увеличения значения на 1, а другая для
// уменьшения на 1.
// 2. Используйте хук useState для управления состоянием счётчика.
// 3. Кнопки можно сделать с помощью material ui

import React, { useState } from 'react';
import { Button } from '@mui/material';
import './counterStyle.css';

function Counter() {
  const [count, setCount] = useState(0);

  const downCount = () => {
    if (count > 0) {
      return setCount(count - 1);
    }
  }

  return (
    <div>
      <h3>{count}</h3>
      <Button onClick={() => setCount(count + 1)} variant="contained" color='success'>+</Button>
      <Button onClick={downCount} variant="contained" color='error'>-</Button>
    </div>
  );
}

export default Counter;