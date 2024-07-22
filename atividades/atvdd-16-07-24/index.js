const express = require("express");

const app = express();

const port = 3333;

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Olá, mundo!");
});

app.get("/mensagem", (request, response) => {
  response.send("Esta é uma mensagem simples.");
});

app.post("/dados", (request, response) => {
  const dados = request.body;
  response.send(`Você enviou os seguintes dados: ${JSON.stringify(dados)}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
