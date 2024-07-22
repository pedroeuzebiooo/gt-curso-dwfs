const express = require("express");

const app = express();

const port = 3333;

app.get("/hello", (request, response) => {
  response.send("Rota hello");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
