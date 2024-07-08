import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="todo-list">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
