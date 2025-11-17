# Task Manager API

## Setup

- Prerequisites: Node.js 18+ installed
- Install dependencies: `npm install`

## Run

- Start server: `node server.js`
- Server listens on `http://localhost:3000`

## API Endpoints

- GET `/tasks` – returns `{ success: true, data: Task[] }`
- GET `/task/:id` – returns a task or `404 { error: "Task not found" }`
- GET `/health` – returns `{ status: "healthy", uptime: number }`
- GET `/` – not implemented (returns 404)

## Task Shape

- `id`: number
- `title`: string
- `completed`: boolean
- `priority`: `low` | `medium` | `high`
- `createdAt`: Date (serialized as ISO string in JSON)