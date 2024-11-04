import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import ToDoList from './components/ToDoList';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <TextInput />
        <ToDoList />
        <Timer />
      </header>
    </div>
  );
}

export default App;
