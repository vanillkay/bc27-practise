// https://jsonplaceholder.typicode.com

const fragment = document.createDocumentFragment();;


const input = document.createElement("input");
const inputBtn = document.createElement("button");
inputBtn.textContent = 'Add ToDo';

inputBtn.addEventListener('click', onAdd)
function onAdd() {
    const toDoTitle = input.value;
    addTodo(toDoTitle);
}

const addTododMarkup = (data) => {
    const toDoMarkup = unpacker([data]);
    ul.insertAdjacentHTML('afterbegin', toDoMarkup);
    return 3;
}

function addTodo(toDoTitle) {
fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
        title: toDoTitle,
        completed: false,
        userId: 9
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response)=>response.json())
    .then(addTododMarkup)
    .then(data => console.log(data))
}

// fragment.append(input);
// fragment.append(inputBtn);

const ul = document.createElement("ul")
// fragment.append(ul);

const buttonRef = document.createElement("button")
buttonRef.textContent = "download todos"
buttonRef.addEventListener("click",onButtonClick)

// fragment.append(input, inputBtn, ul, buttonRef)

ul.addEventListener('click', onChecked)
ul.addEventListener('click', onDelete)
document.body.append(input, inputBtn, ul, buttonRef)

// document.body.append(fragment)


const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

const TOTAL_TODO = 200;
const TODOS_PER_PAGE = 50;
let pageNumber = 1;
const TOTAL_PAGES = TOTAL_TODO / TODOS_PER_PAGE;


function unpacker (data) {
    return data.map(({ id, title, completed }) => {
        const isChecked = completed ? 'checked' : '';
        return `<li data-id=${id}>
        <p>Title: ${title}</p>
        <input type="checkbox" ${isChecked}>
        <button data-delete type="button">Delete me!</button>
        </li>`
    }).join('');
}



function onChecked(e) {
    if (e.target.nodeName !== "INPUT") {
        return;
    }
    const toDoId = e.target.closest('li').dataset.id
    const isCompleted = e.target.checked
    const checkbox = e.target
    onToDoUpdate(isCompleted, toDoId, checkbox)
    e.target.disabled = true;
}

function onToDoUpdate(completed, toDoId, checkbox) {
    fetch(`${BASE_URL}/${toDoId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            completed
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
    ).then(data => console.log(data)).finally(() => {
        checkbox.disabled = false
    })
}




function onButtonClick() {
    if (pageNumber === 1) {
        buttonRef.textContent = "load more"
    }
   
       if (TOTAL_PAGES <= pageNumber) { 
            buttonRef.remove()
        }
    onLoadTodo()


}

function onLoadTodo() {
    const searchParams = new URLSearchParams({
        _limit: TODOS_PER_PAGE,
        _page:  pageNumber 
        
})
    
    fetch(`${BASE_URL}?${searchParams}`).then((response) => {
    return response.json();
    }).then(data => {
    
    ul.insertAdjacentHTML("beforeend",unpacker(data))
       

    }).catch(error => console.log).finally(() => {
        // if (TOTAL_PAGES <= pageNumber) { 
        //     buttonRef.remove()
        // }
        pageNumber+=1 
})
    
}

function onDelete(event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }

    const btnToDisable = event.target;
    const liToDelete = btnToDisable.closest("li");
    const idToDelete = liToDelete.dataset.id;

    onDeleteToDo(idToDelete, liToDelete, btnToDisable);
}

function onDeleteToDo(id, li, btn) {
    btn.disabled = true;
    fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    })
    .then(() => li.remove())
    .catch(error => console.log("Error:", error))
    .finally(() => btn.disabled = false);
}

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE",
// })
//   .then(() => console.log("Post deleted"))
//   .catch(error => console.log("Error:", error));