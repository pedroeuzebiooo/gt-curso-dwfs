const express = require("express");
const app = express();
const port = 3333;

let users = [
  { id: 1, name: "Pedro Euzebio", email: "pedroeuzebio@example.com" },
  { id: 2, name: "Mayk Brito", email: "maykbrito@example.com" },
];

app.get("/users", (request, response) => {
  response.json(users);
});

app.get("/users/:id", (request, response) => {
  const userId = parseInt(request.params.id, 10);
  const user = users.find((u) => u.id === userId);

  if (user) {
    response.json(user);
  } else {
    response.status(404).json({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
