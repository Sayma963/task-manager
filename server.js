const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();

// In-memory storage
const tasks = [
  { id: 1, title: 'Sample Task', completed: false }
];

app.locals.tasks = tasks;

// Middleware
app.use(express.json());

// Mount router
app.use('/tasks', taskRouter);

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
