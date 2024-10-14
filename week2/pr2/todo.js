const todoList = document.querySelector(".todo-list");
const btn = document.querySelector(".add");
const input_tag = document.querySelector("input");


const buttonClick = () => {
    const li = document.createElement('li');
    li.textContent = document.querySelector("input").value;
    todoList.appendChild(li);

    const dlt = document.createElement('button');
    dlt.textContent = "삭제";
    li.appendChild(dlt);

    input_tag.value = '';

    dlt.addEventListener("click", dltClick);

    const dltClick = () => {
    }
};



btn.addEventListener("click", buttonClick);