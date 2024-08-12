const addButton = document.getElementById('add');
const input = document.getElementById('input');
const list = document.getElementById('list');
const priority = document.getElementById('priority');

addButton.addEventListener('click', () => {
    const text = input.value.trim();
    const priorityValue = priority.value;

    if (text && priorityValue) {
        const item = document.createElement('li');
        item.setAttribute('role', 'listitem');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = text;
        
        const prioritySpan = document.createElement('span');
        prioritySpan.textContent = priorityValue.charAt(0).toUpperCase() + priorityValue.slice(1);
        prioritySpan.classList.add('priority', priorityValue);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.setAttribute('aria-label', `Delete task: ${text}`);
        
        item.appendChild(taskSpan);
        item.appendChild(prioritySpan);
        item.appendChild(deleteButton);
        
        list.appendChild(item);
        input.value = '';
        date.value = '';
        priority.value = 'low';
    } else {
        alert('Please enter a task and select a priority level');
    }
});

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});



