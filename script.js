const input = document.querySelector(`input`);
const addToDoButton = document.querySelector(`#addtodo`);
const toDoContainer = document.querySelector(`.todocontainer`);
addToDoButton.addEventListener(`click`, function () {
    const toDoList = document.createElement(`p`);
    const addedDoneButton = document.createElement(`button`);
    const addedDeleteButton = document.createElement(`button`);
    const addedEditButton = document.createElement(`button`);
    addedDoneButton.classList.add(`donebutton`);
    addedDeleteButton.classList.add(`deletebutton`);
    addedEditButton.classList.add(`editbutton`);
    addedDoneButton.textContent = `✔`;
    addedDeleteButton.textContent = `✖`;
    addedEditButton.textContent = `💱`;
    toDoList.textContent = input.value.toUpperCase();
    toDoContainer.appendChild(toDoList);
    toDoList.appendChild(addedDoneButton);
    toDoList.appendChild(addedDeleteButton);
    toDoList.appendChild(addedEditButton);
    input.value = ``;
    addedDoneButton.addEventListener(`click`, function () {
        toDoList.style.textDecoration = `line-through`;
    });
    addedDeleteButton.addEventListener(`click`, function () {
        toDoContainer.removeChild(toDoList);
    });
    addedEditButton.addEventListener(`click`, function () {
        input.value = toDoList.textContent.slice(0, -4);
        toDoContainer.removeChild(toDoList);
    });
});