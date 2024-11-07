// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.
import React, { useState } from 'react';
import { TextField } from '@mui/material';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  };

  const convertToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9;
  };

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    if (celsiusValue !== '') {
      setFahrenheit(convertToFahrenheit(celsiusValue).toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    if (fahrenheitValue !== '') {
      setCelsius(convertToCelsius(fahrenheitValue).toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <div>
      <h2>Конвертер температуры</h2>
      
      <TextField
        label="Цельсий (°C)"
        type="number"
        value={celsius}
        onChange={handleCelsiusChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Фаренгейт (°F)"
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
    </div>
  );
}
