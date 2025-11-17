const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();

// ===== UPDATED: In-memory storage with 5 tasks =====
const tasks = [
  {
    id: 1,
    title: 'Buy groceries',
    completed: false,
    priority: 'low',
    createdAt: new Date()
  },
  {
    id: 2,
    title: 'Complete assignment',
    completed: false,
    priority: 'high',
    createdAt: new Date()
  },
  {
    id: 3,
    title: 'Read a book',
    completed: true,
    priority: 'medium',
    createdAt: new Date()
  },
  {
    id: 4,
    title: 'Clean the room',
    completed: false,
    priority: 'low',
    createdAt: new Date()
  },
  {
    id: 5,
    title: 'Prepare for exam',
    completed: false,
    priority: 'high',
    createdAt: new Date()
  }
];

app.locals.tasks = tasks;

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send("Task Management API is running");
});

// Mount task router
app.use('/tasks', taskRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
