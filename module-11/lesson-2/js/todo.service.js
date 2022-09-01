const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';


axios.defaults.baseURL= BASE_URL

async function onLoadTodo(pageNumber, TODOS_PER_PAGE) {
    try {
        const { data } = await axios.get('/', {
            params: {
                _limit: TODOS_PER_PAGE,
                _page:  pageNumber 
            }
        })
        return data
    } catch(error){
        console.log(error)
    }
}

async function onAddTodo(toDoTitle) {
    try {
        const { data: { body, id } } = await axios.post(`/`, { 
            body: {
                title: toDoTitle,
                completed: false,
                userId: 9
            }
        }) 
        console.log({ ...body, id})
       return { ...body, id};
    
    } catch (error) {
        console.log(error)
    }
}


async function onToDoUpdate(completed, toDoId, checkbox) {
    try{
        await axios.patch(`/${toDoId}`,{ body: { completed } })  
    } catch (error) {
        console.log(error)
    } finally {
        checkbox.disabled = false
    }
}


async function onDeleteToDo(id, li, btn) {
    btn.disabled = true;
    try {
        await axios.delete(`/${id}`)
        li.remove()
    } catch (error) {
        console.log("Error:", error)
    } finally { 
        btn.disabled = false 
    };
}


export {
    onLoadTodo,
    onAddTodo,
    onToDoUpdate,
    onDeleteToDo,
}