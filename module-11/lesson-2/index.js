// https://jsonplaceholder.typicode.com

import * as TodoService from './js/todo.service.js'
import { createBaseMarkup , createTodosMarkup} from './js/todo-markup.service.js';
import { TodoPaginationService } from './js/todo-pagination.service.js';

const pagination = new TodoPaginationService(200, 50);

const {input, inputBtn, ul, buttonRef } = createBaseMarkup();


inputBtn.addEventListener('click', onAdd)
ul.addEventListener('click', onChecked)
ul.addEventListener('click', onDelete)
buttonRef.addEventListener("click",onButtonClick)


const addTododMarkup = (data) => {
    const toDoMarkup = createTodosMarkup([data]);
    ul.insertAdjacentHTML('afterbegin', toDoMarkup);
}

async function onAdd() {
    const toDoTitle = input.value.trim();
    if(toDoTitle.length === 0){
        return;
    }
    const newTodo = await TodoService.onAddTodo(toDoTitle);
    addTododMarkup(newTodo)
    input.value = "";
}


function onChecked(e) {
    if (e.target.nodeName !== "INPUT") {
        return;
    }
    const toDoId = e.target.closest('li').dataset.id
    const isCompleted = e.target.checked
    const checkbox = e.target
    TodoService.onToDoUpdate(isCompleted, toDoId, checkbox)
    e.target.disabled = true;
}


async function onButtonClick() {
    const { pageNumber, TODOS_PER_PAGE } = pagination;
    if (pageNumber === 1) {
        buttonRef.textContent = "load more"
    }
   
    const todos = await TodoService.onLoadTodo(pageNumber,TODOS_PER_PAGE)
    pagination.incrementPage();
    ul.insertAdjacentHTML("beforeend",createTodosMarkup(todos))

    if (!pagination.hasNextPage()) { 
        buttonRef.remove()
    }
}


function onDelete(event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }

    const btnToDisable = event.target;
    const liToDelete = btnToDisable.closest("li");
    const idToDelete = liToDelete.dataset.id;

    TodoService.onDeleteToDo(idToDelete, liToDelete, btnToDisable);
}
