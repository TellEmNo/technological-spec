// Создать React компонент TextDisplayForm, который позволяет пользователю ввести
// текст в поле ввода и отобразить его на экране в стилизованном виде по нажатию
// кнопки.
// ● Создание поля ввода (TextField)
// ○ Добавить TextField для ввода текста пользователем.
// ○ Установить метку (label) поля ввода на "Введите текст".
// ○ Сделать поле ввода на всю ширину (fullWidth).
// ● Разместить кнопку под полем ввода.
// ○ Установить текст кнопки на "Отобразить текст".
// ○ При нажатии на кнопку введенный текст должен отображаться под
// кнопкой.

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function TextDisplayForm() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDisplayText = () => {
    setDisplayText(text);
  };

  return (
    <div>
      <TextField
        label="Введите текст"
        fullWidth
        value={text}
        onChange={handleTextChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleDisplayText}
      >
        Отобразить текст
      </Button>
      {displayText && <p>{displayText}</p>}
    </div>
  );
}