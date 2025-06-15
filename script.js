// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {

    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage and display them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Don't resave during load
    }

    // Function to save updated tasks array to Local Storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            // Only get the text content (excluding the Remove button)
            const taskText = li.firstChild.textContent.trim();
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task to the list
    function addTask(taskText = null, save = true) {
        const text = taskText !== null ? taskText : taskInput.value.trim();

        // If input is empty, alert and stop
        if (text === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = text;

        // Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Set click event to remove task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
            saveTasks(); // Update Local Storage after removing
        };

        // Append button to list item and item to list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field
        if (taskText === null) {
            taskInput.value = '';
        }

        // If adding new task via input, save it
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(text);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Event listeners
    addButton.addEventListener('click', () => addTask());

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load existing tasks on page load
    loadTasks();
});
