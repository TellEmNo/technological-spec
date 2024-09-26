const express = require('express');
const fs = require('fs');
const joi = require('joi');
const app = express();
app.use(express.json());
const port = 3000;
const dataFilePath = './users.json';


app.use(express.json());

const userScheme = joi.object({
  firstName: joi.string().min(1).required(),
  secondName: joi.string().min(1).required(),
  city: joi.string().min(1),
  age: joi.number().min(0).max(150).required(),
});

const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data) || [];
  } catch (error) {
    return [];
  }
};

const writeDataToFile = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
};

app.get('/users', (req, res) => {
  const users = readDataFromFile();

  res.send({ users });
});

app.get('/users/:id', (req, res) => {
  const users = readDataFromFile();
  const userId = +req.params.id;
  const user = users.find(user => user.id === userId);

  if (user) {
    res.send({ user });
  } else {
    res.sendStatus(404);
    res.send({ user: null })
  }
});

app.post('/users', (req, res) => {
  const result = userScheme.validate(req.body);

  if (result.error) {
    return res.status(400).send({ error: result.error.message }); 
  }

  const users = readDataFromFile();
  const uniqueId = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = {
    id: uniqueId,
    ...req.body
  };

  users.push(newUser);
  writeDataToFile(users);

  res.send({ id: newUser.id });
});

app.put('/users/:id', (req, res) => {
  const result = userScheme.validate(req.body);
  
  if (result.error) {
    return res.status(400).send({ error: result.error.message }); 
  }
  
  const userId = +req.params.id;
  const users = readDataFromFile();
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex !== -1) {
    users[userIndex] = {
      ...users[userIndex],
      ...req.body,
    };
    writeDataToFile(users);
    res.send({ user: users[userIndex] });
  } else {
    res.sendStatus(404);
    res.send({ user: null })
  }
});

app.delete('/users/:id', (req, res) => {
  const userId = +req.params.id;
  const users = readDataFromFile
  const userIndex = users.findIndex(user => user.id === userId); 

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    writeDataToFile(users);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
    res.send({ user: null })
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});