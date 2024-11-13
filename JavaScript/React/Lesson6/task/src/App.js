import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddTask from './components/AddTask';
import { ConnectedTaskList } from './components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Task List</h1>
        <AddTask />
        <ConnectedTaskList />
      </div>
    </Provider>
  );
}

export default App;
