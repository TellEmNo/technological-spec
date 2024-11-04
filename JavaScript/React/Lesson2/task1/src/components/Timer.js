import React, { useState, useEffect } from 'react';
import './timerStyle.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className='titleTimer'>Таймер: <span>{seconds}</span> секунд</h2>
      <button className='resetButton' onClick={() => setSeconds(0)}>Сбросить</button>
    </div>
  );
}

export default Timer;
