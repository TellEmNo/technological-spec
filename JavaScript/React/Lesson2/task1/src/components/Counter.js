import React, { useState } from "react";
import './counterStyle.css';

function Counter() {
  const [count, setCount] = useState(0);
  return ( 
    <div className="counter-wrapper">
      <span className="counter">{count}</span>
      <button className="button" onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Counter;