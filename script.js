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

    taskTitle.textContent = taskInput.value;
    taskInfo.textContent = taskInfoInput.value;

    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskInfo);

    // Apply initial hidden state
    taskItem.style.opacity = 0;
    taskItem.style.transform = 'translateX(50px)';

    taskList.appendChild(taskItem);

    // Trigger animation after small delay to ensure CSS transitions apply
    setTimeout(() => {
        taskItem.style.opacity = 1;
        taskItem.style.transform = 'translateX(0)';
    }, 10);

    taskInput.value = '';
    taskInfoInput.value = '';
}
