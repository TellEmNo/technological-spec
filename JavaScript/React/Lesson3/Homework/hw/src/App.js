import logo from './logo.svg';
import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TemperatureConverter />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
