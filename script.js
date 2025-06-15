// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Select required DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to create and add a new task
    function addTask() {
        // Get the trimmed value of the input
        const taskText = taskInput.value.trim();

        // If input is empty, alert user and exit
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a 'Remove' button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an event to remove the task when button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the Remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for 'Add Task' button click
    addButton.addEventListener('click', addTask);

    // Event listener for 'Enter' key press inside the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});