// Seletores de elementos
const dialog = document.querySelector("dialog");
const buttonOpenModal = document.querySelector("#button-open-modal");
const buttonCloseModal = document.querySelector("#button-close-modal");
const form = document.querySelector("form");
const sectionTasks = document.querySelector("#tasks");
const searchInput = document.querySelector("#search-task");

let tasks = [];

const openModal = () => {
  dialog.showModal();
};

const closeModal = () => {
  dialog.close();
};

const getTasks = async () => {
  try {
    const response = await fetch("http://localhost:3000/tasks");
    tasks = await response.json();
    displayTasks(tasks);
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
  }
};

const displayTasks = (tasks) => {
  sectionTasks.innerHTML = "";
  if (tasks.length > 0) {
    tasks.forEach((task) => {
      sectionTasks.innerHTML += createTaskHTML(task);
    });
    addDeleteTaskListeners();
  } else {
    sectionTasks.innerHTML =
      "<h3 style='text-align: center'>Nenhuma tarefa foi adicionada!</h3>";
  }
};

const createTaskHTML = (task) => {
  return `
    <div class="task" data-task-id="${task.id}">
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <button type="button" id="button-delete-task">Apagar</button>
    </div>
  `;
};

const addDeleteTaskListeners = () => {
  const deleteButtons = document.querySelectorAll("#button-delete-task");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", handleDeleteTask);
  });
};

const handleDeleteTask = async (event) => {
  const taskElement = event.target.closest(".task");
  const taskId = taskElement.dataset.taskId;
  try {
    await deleteTask(taskId);
    taskElement.remove();
  } catch (error) {
    console.error("Erro ao apagar tarefa:", error);
  }
};

const deleteTask = async (taskId) => {
  const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Erro ao apagar tarefa");
  }
};

const filterTasks = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm) ||
      task.description.toLowerCase().includes(searchTerm)
  );
  displayTasks(filteredTasks);
};

getTasks();

buttonOpenModal.addEventListener("click", openModal);
buttonCloseModal.addEventListener("click", closeModal);
searchInput.addEventListener("input", filterTasks);

const handleFormSubmit = (event) => {
  event.preventDefault();
  const task = getTaskFromForm();
  submitTask(task);
};

const getTaskFromForm = () => {
  return {
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value,
  };
};

const submitTask = (task) => {
  fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Task added successfully:", data);
    })
    .catch((error) => {
      console.error("Error adding task:", error);
    });
};

form.addEventListener("submit", handleFormSubmit);
