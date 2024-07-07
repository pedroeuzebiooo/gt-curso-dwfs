# Criando um Formulário de Feedback com useState

**Aberto:** quinta-feira, 4 jul. 2024, 00:00

**Objetivo do Desafio:** Crie um componente de formulário de feedback que utiliza o hook useState para gerenciar o estado dos inputs do formulário. O desafio é entender e aplicar os conceitos de useState para criar um formulário interativo e dinâmico.

**Instruções:**

1. **Setup do Projeto:**

- Certifique-se de que você tem um projeto React configurado. Se ainda não tiver, você pode usar o Create React App para criar um rapidamente.
- Crie um novo componente chamado FeedbackForm.

2. **Estrutura do Formulário:**

- O componente FeedbackForm deve conter os seguintes campos:
  - Nome (input de texto)
  - Email (input de texto)
  - Comentário (textarea)
  - Botão de Enviar

3. **Gerenciamento de Estado com useState:**

- Utilize o hook useState para criar estados para cada campo do formulário (nome, email e comentário).
- Inicialize os estados como strings vazias.

4. **Atualização do Estado:**

- Crie funções que atualizam os estados em resposta aos eventos de mudança (onChange) nos inputs.
- Certifique-se de que o estado correto está sendo atualizado conforme os usuários digitam nos campos.

5. **Envio do Formulário:**

- Crie uma função que é chamada ao clicar no botão de enviar.
- Faça com que essa função:
  - Exiba um alerta com os dados do formulário (por exemplo, Nome: <nome>, Email: <email>, Comentário: <comentário>).
  - Opcional: Você pode adicionar validações simples, como verificar se os campos estão preenchidos antes de exibir o alerta.

6. **Estilização (Opcional):**

- Adicione estilos básicos para tornar o formulário mais apresentável

Critérios de Avaliação:

- O componente deve utilizar useState corretamente para gerenciar os estados dos inputs.
- Os estados devem ser atualizados em resposta aos eventos de mudança nos inputs.
- A função de envio do formulário deve exibir os dados corretamente em um alerta.
- (Opcional) Estilização básica para melhorar a apresentação do formulário.
