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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
