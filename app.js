function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create new li
    let newLi = document.createElement('li');
    newLi.classList.add('mdl-list__item', 'newMDL');

    //create new input
    let checkbox = document.createElement('input');

    //set input's type to checkbox
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);
    })

    //set the title
    newLi.textContent = title;

    //attach checkbox to the Li
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);

    //attach li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
}

window.onload = function() {

  onReady();
};
