import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import { Button } from '@mui/material';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      console.log('Dispatching addTask with description:', description);
      dispatch(addTask(description));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px', width: '27.3%'}}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
        style={{ marginRight: '24px' }}
      />
      <Button variant="contained" color="success" size='small' type="submit">Add Task</Button>
    </form>
  );
}

export default AddTask;
