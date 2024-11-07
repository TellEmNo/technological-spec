// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: newTask } // Date для уникальности id
      ]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2>Список задач</h2>

      <TextField
        label="Новая задача"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="success"
        onClick={addTask}
        style={{ marginTop: '20px' }}
      >
        Добавить задачу
      </Button>

      <div style={{ marginTop: '20px' }}>
        {tasks.map((task) => (
          <Card key={task.id} style={{ marginBottom: '16px' }}>
            <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{task.text}</span>
              <IconButton onClick={() => deleteTask(task.id)} color="inherit" >
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
