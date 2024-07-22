const express = require("express");

const app = express();

app.get("/hello", (request, response) => {
  response.send("Hello World");
});

app.listen(3333, () => {
  console.log("Servidor rodando");
});
