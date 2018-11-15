const app = document.querySelector("#app");
const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("todos") || "[]");

function renderTodos(){
    listElement.innerHTML = "";
    for (const listItem of todos) {
        const todosText = document.createTextNode(listItem);

        const li = document.createElement("li");
        li.appendChild(todosText);

        const linkElement = document.createElement('a');
        linkElement.setAttribute("href", "#");

        var pos = todos.indexOf(listItem);
        linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

        const linkText = document.createTextNode(" x");
        linkElement.appendChild(linkText);
        li.appendChild(linkElement);



        listElement.appendChild(li);
    }
}
renderTodos();

function addTodos() {
    var todoText = inputElement.value;
    todos.push(todoText);
    saveToDoStorage();

    inputElement.value = "";
    renderTodos();
}

buttonElement.onclick = function () {
    addTodos();
};

function deleteTodo(pos) {
    todos.splice(pos, 1);
    saveToDoStorage();
    renderTodos();    
}

function saveToDoStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
}