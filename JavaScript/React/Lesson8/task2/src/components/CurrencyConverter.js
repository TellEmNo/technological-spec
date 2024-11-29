import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [rubles, setRubles] = useState(''); // Количество рублей для конвертации
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Выбранная валюта
  const [convertedAmount, setConvertedAmount] = useState(null); // Результат конвертации
  const [currencies, setCurrencies] = useState([]); // Доступные валюты
  const [error, setError] = useState(null); // Ошибки при запросе

  const API_KEY = '248cf812556a0e160949c05b';
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/RUB`; // Замените на ваш ключ
  // Функция для получения списка валют
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.result === 'success') {
          setCurrencies(Object.keys(data.conversion_rates)); // Получаем коды валют
        } else {
          setError('Не удалось загрузить список валют.');
        }
      } catch (err) {
        setError('Ошибка сети: ' + err.message);
      }
    };

    fetchCurrencies();
  }, [API_URL]);

  // Функция для конвертации валюты
  const convertCurrency = async () => {
    if (!rubles || isNaN(rubles) || rubles <= 0) {
      setError('Введите корректное количество рублей.');
      return;
    }

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.result === 'success') {
        const rate = data.conversion_rates[selectedCurrency];
        const result = (rubles * rate).toFixed(2);
        setConvertedAmount(result);
        setError(null);
      } else {
        setError('Ошибка при получении данных для конвертации.');
      }
    } catch (err) {
      setError('Ошибка сети: ' + err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Конвертер валют</h1>
      
      <div>
        <label htmlFor="rubles">Введите количество ₽:</label>
        <input
          id="rubles"
          type="number"
          value={rubles}
          onChange={(e) => setRubles(e.target.value)}
          style={styles.input}
        />
      </div>

      <div>
        <label htmlFor="currency">Выберите валюту:</label>
        <select
          id="currency"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          style={styles.select}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <button onClick={convertCurrency} style={styles.button}>Конвертировать</button>

      {error && <p style={styles.error}>{error}</p>}

      {convertedAmount !== null && (
        <p style={styles.result}>
          {rubles} ₽ = {convertedAmount} {selectedCurrency}
        </p>
      )}
    </div>
  );
};

// Простейшие стили
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  input: {
    margin: '10px',
    padding: '5px',
    fontSize: '16px',
  },
  select: {
    margin: '10px',
    padding: '5px',
    fontSize: '16px',
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
  error: {
    color: 'red',
    marginTop: '20px',
  },
  result: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#333',
  },
};

export default CurrencyConverter;
