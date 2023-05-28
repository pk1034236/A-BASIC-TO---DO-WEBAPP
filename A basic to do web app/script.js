// Store tasks in an array
let tasks = [];

// Add a new task to the pending tasks list
function addTask() {
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value.trim();

  if (task !== '') {
    tasks.push({
      name: task,
      completed: false,
      dateAdded: new Date()
    });

    taskInput.value = '';
    renderTasks();
  }
}

// Render tasks on the page
function renderTasks() {
  const pendingTasksList = document.getElementById('pending-tasks');
  const completedTasksList = document.getElementById('completed-tasks');

  // Clear the existing lists
  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  // Add tasks to the appropriate lists
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      tasks[index].completed = checkbox.checked;
      renderTasks();
    });

    const taskName = document.createElement('span');
    taskName.innerText = task.name;
    taskName.className = task.completed ? 'completed' : '';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(taskName);
    li.appendChild(deleteButton);

    if (task.completed) {
      completedTasksList.appendChild(li);
    } else {
      pendingTasksList.appendChild(li);
    }
  });
}

// Initial render of tasks
renderTasks();