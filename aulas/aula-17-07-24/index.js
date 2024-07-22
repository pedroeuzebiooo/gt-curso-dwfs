const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
const port = 3333;

app.use(express.json());

app.post(
  "/users",
  [
    body("nome").notEmpty().withMessage("O nome é obrigatório."),
    body("email").isEmail().withMessage("Deve ser um email válido."),
    body("idade")
      .isInt({ min: 0 })
      .withMessage("A idade deve ser um número inteiro não negativo."),
  ],
  (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { nome, email, idade } = request.body;

    response.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      data: { nome, email, idade },
    });
  }
);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
