"use strict";
var saveTodos = function () {
    localStorage.setItem("todos", JSON.stringify(todos));
};
var createTodo = function (todo) {
    var newLI = document.createElement("li");
    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.checked = todo.completed;
    newCheckbox.addEventListener("change", function () {
        todo.completed = !todo.completed;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(newCheckbox);
    todolist.append(newLI);
};
var todos = readTodos();
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.getElementById("todoform");
var todolist = document.getElementById("todolist");
todos.forEach(createTodo);
function readTodos() {
    var todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
var handleSubmit = function (e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
};
form.addEventListener("submit", handleSubmit);
