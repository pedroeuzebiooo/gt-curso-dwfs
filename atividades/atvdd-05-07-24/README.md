# Atividade: Aplicação de lista de tarefas (To-Do List)

**Aberto:** sexta-feira, 5 jul. 2024, 00:00

**Vencimento:** sábado, 13 jul. 2024, 00:00

## Objetivo da Atividade

Consolidar os conceitos aprendidos durante a aula, promovendo a prática de criação e estruturação de um projeto React, bem como o uso de componentes, props, children, hooks (useState e useRef) e bibliotecas.

## Descrição da Atividade

Você será responsável por criar um pequeno projeto em React, que consiste em uma aplicação de lista de tarefas (To-Do List). Siga os passos abaixo para completar a atividade:

## Passo 1: Configuração Inicial do Projeto

1. **Criação do Projeto:**

   - Utilize o Create React App para iniciar um novo projeto chamado `todo-list`.
   - Navegue até a pasta do projeto e inicie o servidor de desenvolvimento.

   ```bash
   npx create-react-app todo-list cd todo-list npm start
   ```

2. **Estrutura Básica:**

   - Organize a estrutura de pastas e arquivos do projeto. Crie uma pasta `components` dentro da pasta `src`.

## Passo 2: Estruturação do Projeto

1. **Organização:**

   - Dentro da pasta `components`, crie um arquivo `TodoList.js` e um arquivo `TodoItem.js`.
   - Adicione um arquivo CSS `App.css` para estilizar a aplicação.

2. **Boas Práticas:**

   - Certifique-se de manter uma estrutura organizada, separando componentes e estilos.

## Passo 3: Declarando Bibliotecas

1. **Instalação de Bibliotecas:**

   - Instale o React Router para navegação (opcional para esta atividade) e o Axios para futuras requisições HTTP (opcional para esta atividade).

```bash
npm install react-router-dom axios
```

## Passo 4: Criando Componentes

1. **TodoList Component:**

   Crie um componente funcional chamado TodoList que será responsável por gerenciar a lista de tarefas.

2. **TodoItem Component:**
   - Crie um componente funcional chamado TodoItem que será responsável por exibir cada tarefa.

## Passo 5: Imports e Exports

1. **Importações e Exportações:**
   - Utilize importações padrão e nomeadas conforme necessário para organizar e reutilizar o código.

## Passo 6: Props e Children

1. **Passando Dados:**

   - Utilize props para passar dados do componente TodoList para TodoItem.
   - Não é necessário utilizar children diretamente nesta atividade, mas compreenda seu conceito.

## Passo 7: Hooks useState e useRef

1. **Gerenciamento de Estado:**

   - Utilize o hook useState para gerenciar o estado da lista de tarefas e o valor do input.

2. **Referências DOM:**

   - Crie uma referência ao input utilizando o hook useRef (opcional para esta atividade).

## Passo 8: Estilização

1. **CSS:**
   - Adicione estilos básicos ao arquivo App.css para melhorar a aparência da aplicação.

## Entrega

**Submissão:**

- Suba o projeto no GitHub e compartilhe o link do repositório.
- Inclua um arquivo README.md com instruções de como rodar o projeto.

## Dicas

- Lembre-se de comentar seu código quando necessário.
- Utilize boas práticas de desenvolvimento.
- Sinta-se à vontade para adicionar funcionalidades extras para aprimorar a aplicação.

Boa sorte e bom trabalho!
