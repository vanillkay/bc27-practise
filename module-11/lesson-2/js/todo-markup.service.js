
export function createBaseMarkup(){
    const input = document.createElement("input");
    const inputBtn = document.createElement("button");
    inputBtn.textContent = 'Add ToDo';

    const ul = document.createElement("ul")

    const buttonRef = document.createElement("button")
    buttonRef.textContent = "download todos"

    document.body.append(input, inputBtn, ul, buttonRef)

    return {
        input,
        inputBtn,
        ul,
        buttonRef,  
    }
}

export function createTodosMarkup (data) {
    return data.map(({ id, title, completed }) => {
        const isChecked = completed ? 'checked' : '';
        return `<li data-id=${id}>
        <p>Title: ${title}</p>
        <input type="checkbox" ${isChecked}>
        <button data-delete type="button">Delete me!</button>
        </li>`
    }).join('');
}