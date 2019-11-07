const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  // event handler til að eyða færslu
  const dobby = document.querySelector('.items');
  dobby.addEventListener('click', (deleteItem)); 

  function deleteItem(e) {
    if(e.target.className == 'item__button'){
      const li = e.target.parentElement;
      li.remove();
    }
  }

form.addEventListener('submit', function(e){
e.preventDefault();
  const value = form.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const checkbx=document.createElement('input');
  const taskname = document.createElement('span');
  const deleteButton = document.createElement('button');

  taskname.textContent = value;
  deleteButton.textContent = 'Eyða';

  checkbx.type=("checkbox");
  checkbx.classList.add("item__checkbox");
  taskname.classList.add("item__text");
  deleteButton.classList.add("item__button");
  li.classList=("item")


  li.appendChild(checkbx);
  li.appendChild(taskname);
  li.appendChild(deleteButton);
  items.appendChild(li);
  
  
  
  
  
  
});})
