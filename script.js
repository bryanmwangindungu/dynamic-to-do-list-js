// Wait for the DOM to fully load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {

    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the value from the input field and trim whitespace
        const taskText = taskInput.value.trim();

        // If input is empty, alert user and stop
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the li text content to the task

        // Create a new "Remove" button element
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Give it a class for styling

        // Assign an event listener to the Remove button
        removeButton.onclick = function() {
            // When clicked, remove the li element from the task list
            taskList.removeChild(listItem);
        };

        // Append the Remove button to the li element
        listItem.appendChild(removeButton);

        // Append the li element to the task list
        taskList.appendChild(listItem);

        // Clear the input field after adding a task
        taskInput.value = '';
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Attach event listener to the input field to add task on pressing "Enter"
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});