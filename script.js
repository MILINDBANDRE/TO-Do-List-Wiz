// Get references to the input field and the task list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span><button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

// Function to delete a task
function deleteTask(button) {
  const li = button.parentNode;
  taskList.removeChild(li);
}
