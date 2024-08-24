 function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskInfoInput = document.getElementById('taskInfoInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');

    const taskTitle = document.createElement('h3');
    const taskInfo = document.createElement('p');
    const deleteBtn = document.createElement('button');

    taskTitle.textContent = taskInput.value;
    taskInfo.textContent = taskInfoInput.value;

    // Create and style the delete button
    deleteBtn.className = 'delete-btn';
    
    // Add event listener to delete the task
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskInfo);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);

    // Clear input fields after adding the task
    taskInput.value = '';
    taskInfoInput.value = '';
}
