import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from './components/Box';
import List from './components/List';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function App() {
  const items = [
    { id: 1, text: 'Item 1', style: { color: 'red', listStyleType: 'none' } },
    { id: 2, text: 'Item 2', style: { color: 'green', listStyleType: 'none' } },
    { id: 3, text: 'Item 3', style: { color: 'blue', listStyleType: 'none' } },
  ];

  const renderItems = () => {
    return items.map((item) => (
      <li key={item.id} style={item.style}>
        {item.text}
      </li>
    ))
  }

  return (
    <div className="App">
      {/* <Box>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          voluptate facilis, officia quae voluptatem, autem quidem, voluptates
          nesciunt exercitationem accusantium quia quibusdam. Quos, quaem. Culpa
        </p>
      </Box>
      <Box>
        <p style={{ color: 'aquamarine', fontSize: '26px' }}>
          Porem cringum fuckilis, zooficiam. Gulpa, cicka cringum.
        </p>
      <List render={renderItems} />
      </Box> */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/details/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
