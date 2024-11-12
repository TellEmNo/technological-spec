import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Счетчик: {count}</h1>
      <button onClick={() => dispatch(increment())} style={{ marginRight: '10px' }}>
        Увеличить
      </button>
      <button onClick={() => dispatch(decrement())}>
        Уменьшить
      </button>
    </div>
  );
}

export default App;
