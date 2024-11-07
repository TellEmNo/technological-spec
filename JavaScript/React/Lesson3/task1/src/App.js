import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import MessagesList from './components/MessagesList';
import ThemeSwitcher from './components/ThemeSwitcher';
import TextDisplayForm from './components/TextDisplayForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Name" />
        <Counter />
        <MessagesList />
        <ThemeSwitcher />
        <TextDisplayForm />
      </header>
    </div>
  );
}

export default App;