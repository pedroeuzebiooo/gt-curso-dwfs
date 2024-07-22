const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
const port = 3333;

app.use(express.json());

let usuarios = [];

app.post(
  "/users",
  [
    body("nome").notEmpty().withMessage("O nome é obrigatório."),
    body("email").isEmail().withMessage("Deve ser um email válido."),
    body("idade")
      .isInt({ min: 0 })
      .withMessage("A idade deve ser um número inteiro não negativo."),
  ],
  (request, res) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nome, email, idade } = request.body;
    const id = usuarios.length + 1;
    const novoUsuario = { id, nome, email, idade };
    usuarios.push(novoUsuario);

    res
      .status(201)
      .json({ message: "Usuário cadastrado com sucesso!", data: novoUsuario });
  }
);

app.put(
  "/users/:id",
  [
    body("nome")
      .optional()
      .notEmpty()
      .withMessage("O nome não pode ser vazio."),
    body("email").optional().isEmail().withMessage("Deve ser um email válido."),
    body("idade")
      .optional()
      .isInt({ min: 0 })
      .withMessage("A idade deve ser um número inteiro não negativo."),
  ],
  (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { id } = request.params;
    const { nome, email, idade } = request.body;

    const usuarioIndex = usuarios.findIndex((user) => user.id == id);
    if (usuarioIndex === -1) {
      return response.status(404).json({ message: "Usuário não encontrado." });
    }

    if (nome) usuarios[usuarioIndex].nome = nome;
    if (email) usuarios[usuarioIndex].email = email;
    if (idade) usuarios[usuarioIndex].idade = idade;

    response.json({
      message: "Usuário atualizado com sucesso!",
      data: usuarios[usuarioIndex],
    });
  }
);

app.delete("/users/:id", (request, response) => {
  const { id } = request.params;

  const usuarioIndex = usuarios.findIndex((user) => user.id == id);
  if (usuarioIndex === -1) {
    return response.status(404).json({ message: "Usuário não encontrado." });
  }

  usuarios.splice(usuarioIndex, 1);
  response.json({ message: "Usuário excluído com sucesso!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
