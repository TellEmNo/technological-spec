import logo from './logo.svg';
import './App.css';
import Message from './components/MessageComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Message text="Добрый день !" />
        </div>
      </header>
    </div>
  );
}

export default App;
