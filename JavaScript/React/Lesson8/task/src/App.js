import React from 'react';
import JokeGenerator from './components/JokeGenerator';

const App = () => {
  return (
    <div style={styles.container}>
      <h1>Случайные шутки о Чаке Норрисе</h1>
      <JokeGenerator />
    </div>
  );
};

// Простейшие стили
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;
