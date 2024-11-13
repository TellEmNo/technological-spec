import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTaskCompleted } from '../actions/taskActions';
import { Button } from '@mui/material';

function TaskList({ tasks, deleteTask, toggleTaskCompleted }) {
  console.log('Tasks in TaskList:', tasks);
  if (!Array.isArray(tasks)) {
    console.error('Expected tasks to be an array, but got:', tasks);
    return null;
  }
  return (
    <ul style={{ width: '27.3%', padding: '0', listStyle: 'none' }}>
      {tasks.map(task => (
        <li
          key={task.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            borderBottom: '1px solid #ccc',
            cursor: 'pointer',
            backgroundColor: task.isCompleted ? 'lightgreen' : 'transparent'
          }}
          onClick={() => toggleTaskCompleted(task.id)}
        >
          <span

            style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
          >
            {task.description}
          </span>
          <Button
            color="error"
            variant="contained"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(task.id);
            }}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  console.log('State in mapStateToProps:', state);
  return {
    tasks: state.tasks.tasks || [],
  };
};

const mapDispatchToProps = {
  deleteTask,
  toggleTaskCompleted,
};

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskList;
