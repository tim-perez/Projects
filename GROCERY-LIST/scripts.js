const submitButton = document.querySelector('.submit-button');
const clearButton = document.querySelector('.clear-items-button');
const input = document.querySelector('.grocery-item-input');

function addItem() {
  const value = input.value;

  if (value === '') return; 

  const list = document.querySelector('.grocery-list-items');
  const listItem = document.createElement('li');


  const textNode = document.createElement('span');
  textNode.textContent = value;


  const checkImg = document.createElement('img');
  checkImg.src = './images/check.svg';
  checkImg.alt = 'Check';
  checkImg.classList.add('check-icon');


  checkImg.addEventListener('click', function() {
    textNode.classList.toggle('checked'); 
  });


  const deleteImg = document.createElement('img');
  deleteImg.src = './images/trash.svg'; 
  deleteImg.alt = 'Delete';
  deleteImg.classList.add('delete-icon');


  deleteImg.addEventListener('click', function() {
    listItem.remove(); 
  });


  listItem.appendChild(textNode);
  listItem.appendChild(checkImg);
  listItem.appendChild(deleteImg);


  list.appendChild(listItem);


  input.value = '';
};
submitButton.addEventListener('click', addItem);

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addItem();
  }
});

clearButton.addEventListener('click', function() {
  const list = document.querySelector('.grocery-list-items');
  list.innerHTML = ''; 
});
