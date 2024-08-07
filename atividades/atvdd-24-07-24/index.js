const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
const port = 3333;

app.use(express.json());

let tasks = [];

app.post(
  "/tasks",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").isString().withMessage("Description must be a string"),
    body("completed").isBoolean().withMessage("Completed must be a boolean"),
  ],
  (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { title, description, completed } = request.body;
    const newTask = { id: tasks.length + 1, title, description, completed };
    tasks.push(newTask);

    response.status(201).json(newTask);
  }
);

app.put(
  "/tasks/:id",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").isString().withMessage("Description must be a string"),
    body("completed").isBoolean().withMessage("Completed must be a boolean"),
  ],
  (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const taskId = parseInt(request.params.id, 10);
    const { title, description, completed } = request.body;
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
      return response.status(404).json({ message: "Task not found" });
    }

    tasks[taskIndex] = { id: taskId, title, description, completed };
    response.json(tasks[taskIndex]);
  }
);

app.delete("/tasks/:id", (request, response) => {
  const taskId = parseInt(request.params.id, 10);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return response.status(404).json({ message: "Task not found" });
  }

  tasks.splice(taskIndex, 1);
  response.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
