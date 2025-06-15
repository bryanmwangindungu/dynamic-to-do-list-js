// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if taskText is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a 'Remove' button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add an event listener to the 'Remove' button to delete its parent <li>
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listener to the 'Add Task' button
    addButton.addEventListener('click', addTask);

    // Attach event listener for pressing 'Enter' inside the task input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});