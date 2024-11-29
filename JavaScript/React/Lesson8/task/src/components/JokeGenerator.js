import React, { useState, useEffect } from 'react';

const JokeGenerator = () => {
  const [joke, setJoke] = useState(''); // Хранит текущую шутку
  const [loading, setLoading] = useState(false); // Отображает состояние загрузки
  const [error, setError] = useState(null); // Отображает ошибки
  const url = 'https://api.chucknorris.io/jokes/rando';
  // Функция для получения шутки
  const fetchJoke = async () => {
    setLoading(true); // Включаем индикатор загрузки
    setError(null); // Сбрасываем ошибки
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      setJoke(data.value); // Сохраняем шутку в состояние
      localStorage.setItem('lastJoke', data.value); // Сохраняем шутку в localStorage
    } catch (error) {
      setError('Не удалось загрузить новую шутку. Попробуйте снова.');
      console.error('Ошибка:', error);
    } finally {
      setLoading(false); // Выключаем индикатор загрузки
    }
  };

  // Используем useEffect для восстановления шутки из localStorage при первой загрузке
  useEffect(() => {
    const savedJoke = localStorage.getItem('lastJoke');
    if (savedJoke) {
      setJoke(savedJoke); // Устанавливаем сохранённую шутку
    }
  }, []);

  return (
    <div style={styles.container}>
      <button onClick={fetchJoke} style={styles.button} disabled={loading}>
        {loading ? 'Загружаем...' : 'Получить шутку'}
      </button>
      {error && <p style={styles.error}>{error}</p>}
      {joke && <p style={styles.joke}>{joke}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  joke: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#333',
  },
  error: {
    marginTop: '20px',
    fontSize: '18px',
    color: 'red',
  },
};

export default JokeGenerator;
