import { createSlice } from '@reduxjs/toolkit';
import { loadTasks } from '../actions/taskActions';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTasks.pending, (state) => {
        state.loading = true; // Запрос начинается
      })
      .addCase(loadTasks.fulfilled, (state, action) => {
        state.loading = false; // Запрос завершён
        state.tasks = action.payload; // Сохраняем в state
      })
      .addCase(loadTasks.rejected, (state, action) => {
        state.loading = false; // Запрос завершён с ошибкой
        state.error = action.error.message;
      });
  },
});

export default tasksSlice.reducer;