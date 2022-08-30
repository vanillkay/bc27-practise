// https://jsonplaceholder.typicode.com

const ul = document.createElement("ul");
document.body.append(ul);

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


const buttonRef = document.createElement("button")
buttonRef.textContent = "download todos"
buttonRef.addEventListener("click",onButtonClick)

document.body.append(buttonRef)

function onButtonClick() {
    if (pageNumber === 1) {
        buttonRef.textContent = "load more"
    }
   
       // if (TOTAL_PAGES <= pageNumber) { 
        //     buttonRef.remove()
        // }
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

    ul.addEventListener('click', onChecked)
    }).catch(error => console.log).finally(() => {
        // if (TOTAL_PAGES <= pageNumber) { 
        //     buttonRef.remove()
        // }
        pageNumber+=1
       
    
})
    
}