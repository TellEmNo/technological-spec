import { createAsyncThunk } from '@reduxjs/toolkit';
import tasks from '../data/tasks';

// Имитация
export const loadTasks = createAsyncThunk('tasks/loadTasks', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 2000);
  });
});