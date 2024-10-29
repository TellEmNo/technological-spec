import logo from './logo.svg';
import './App.css';
import Greeting from './components/NewComponentt.js';
import CurrentTime from './components/CurrentTimeComponent.js';
import EventCard from './components/EventCardComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting />
        <CurrentTime />
        
        <div>
        <EventCard title="'Крутая группа'" date="22 октября 2024, 19:00" location="Москва, Крокус Сити Холл" />
        <EventCard title="'Мир Динозавров'" date="5 ноября 2024, 10:00" location="Санкт-Петербург, Экспофорум" />
        <EventCard title="'Вкусная осень'" date="12 ноября 2024, 12:00" location="Нижний Новгород, Парк культуры и отдыха" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Do Not Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
