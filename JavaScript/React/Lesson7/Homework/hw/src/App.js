import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks } from './actions/taskActions';

const App = () => {
  const dispatch = useDispatch();

  const { tasks, loading, error } = useSelector((state) => state.tasks);

  // Диспатчим асинхронное действие при монтировании компонента
  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Список задач</h1>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}

      {!loading && !error && tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.title}</span>
              <span>{task.completed ? '✔️' : '❌'}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;