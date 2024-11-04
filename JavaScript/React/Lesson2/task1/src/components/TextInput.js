import React, { useState } from 'react';
import './textInputStyle.css';
function TextInput() {
  const [text, setText] = useState('');
  return ( 
    <div>
      <input сlassName="input" type="text" placeholder='Введите текст' onChange={(e) => setText(e.target.value)}/>
      <div className="text-wrapper">
        <p className="text">{text !== '' ? text : 'Пока вы ничего не ввели.'}</p>
      </div>
    </div>
  );
}

export default TextInput;