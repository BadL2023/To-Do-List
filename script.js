const addButton = document.getElementById('add-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const listItem = document.createElement('li');
    
    const textNode = document.createElement('span');
    textNode.textContent = todoText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    
    deleteButton.addEventListener('click', () => {
      todoList.removeChild(listItem);
    });

    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
    
    todoInput.value = '';
  }
});

todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addButton.click();
  }
});