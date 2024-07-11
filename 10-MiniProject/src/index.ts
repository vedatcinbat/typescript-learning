"use strict"

//console.log("I AM HUNGARY!")

/* const printDouble = (msg: string): void => {
    console.log(`${msg}\n${msg}`)
}

printDouble("Hello World :)")

/* console.log(btn)

"hello".replaceAll("l", "L") */

/* const btn = document.getElementById("btn")!;

// This approach is using ? for optional chaining
btn.addEventListener("click", () => {
    console.log("Button was clicked! at : " + Date.now())
})


let mystery: unknown = 4;

const numChars = (mystery as string).length; // ERROR: Property 'length' does not exist on type 'string | number'.
 */
/* const inputValue = (<HTMLInputElement>input).value;
console.log(inputValue) */

/*
btn.addEventListener("click", () => {
    const inputValue = input.value;
    alert("You entered: " + inputValue)
    input.value = "" 
});
*/

interface Todo {
    text: string;
    completed: boolean;
}

const saveTodos = () =>{
    localStorage.setItem("todos", JSON.stringify(todos));
}

const createTodo = (todo: Todo) => {
    const newLI = document.createElement("li");
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.checked = todo.completed;
    newCheckbox.addEventListener("change", () => {
        todo.completed = !todo.completed;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(newCheckbox);
    todolist.append(newLI);
}

const todos: Todo[] = readTodos();

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.getElementById("todoform")! as HTMLFormElement;
const todolist = document.getElementById("todolist")! as HTMLUListElement;
todos.forEach(createTodo);

function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if(todosJSON === null) return [];
    return JSON.parse(todosJSON);
}

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    };

    createTodo(newTodo)
    todos.push(newTodo);

    saveTodos();

    input.value = "";
}



form.addEventListener("submit", handleSubmit);

/* form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    console.log("Form was submitted! at : " + Date.now())   
}) */