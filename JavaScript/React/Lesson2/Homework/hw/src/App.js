import logo from './logo.svg';
import './App.css';
import CommentsList from './components/CommentsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < CommentsList />
      </header>
    </div>
  );
}

export default App;
