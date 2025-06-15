// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

    // Select the Add Task button, task input, and task list container
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the function to add a new task
    function addTask() {
        // Get and trim the task input value
        const taskText = taskInput.value.trim();

        // If taskText is empty, alert the user and exit
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element and set its text content
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an onclick event to remove the li when clicked
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the Remove button to the <li>
        listItem.appendChild(removeButton);

        // Append the <li> to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Attach event listener to task input for Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});