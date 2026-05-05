/**
 * 1. Listen for click event on #add_btn
 * 2. get value of input .input_area/
 * 3. Add the value of the task list #task_list**/

let todoList = document.querySelector("#task_list");
// get element
let adBtn = document.querySelector("#add_btn");
//  listen for event
adBtn.addEventListener("click", (e) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    e.preventDefault();
    let todoValue = document.querySelector(".input_area").value;
    if(todoValue == ""){
        let errorDiv = document.querySelector("#errorDiv")
        return errorDiv.innerHTML = `<p>Can not accept empty input!</p>`
    }
    document.querySelector("#errorDiv").innerHTML = "";
    let taskId = Date.now();
    let timeStamp = new Date(taskId).toLocaleDateString();
    if (todos == null) {
        localStorage.setItem(
            "todos",
            JSON.stringify([
                { task: todoValue, taskId: taskId, dateAdded: timeStamp },
            ]),
        );
    } else {
        todos.push({ task: todoValue, taskId: taskId, dateAdded: timeStamp });
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    loadTodoData();
    document.querySelector(".input_area").value = "";
});

let checkTask = (taskId) => {
    // why not accept custom ID like taskID333-445 ...........===========================>>>>>>>>>>>>>>>>>
    // check bug anytime I add new task
    let checkBtn = document.getElementById(taskId);
    checkBtn.previousElementSibling.classList.toggle("line-through");
};

let taskDelete = (taskId) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo, index) => {
        if(todo.taskId == taskId) {
            todos.splice(index, 1)
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));
    loadTodoData();
}

function loadTodoData() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos == null) {
        todoList.innerHTML = "";
    } else {
        todoList.innerHTML = "";
        todos.forEach((todo) => {
            let taskDiv = document.createElement("div");
            taskDiv.innerHTML = `
                <ul class="todo flex justify-between items-start p-2.5 rounded-md bg-black border-2 border-blue-300">
                    <div class="flex flex-col items-start gap-5">
                    <li>${todo.task}</li>
                    <input type="checkbox" id="${todo.taskId}" onclick="checkTask('${todo.taskId}')">
                    </div>
                    <div class="flex items-center gap-5">
                    <p>${todo.dateAdded}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="2 2 20 20" onclick="taskDelete('${todo.taskId}')" class="transition active:scale-90">
                        <path
                        d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z">
                        </path>
                        <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                    </svg>
                    </div>
                </ul>`;
            todoList.appendChild(taskDiv);
        });
    }
}
loadTodoData();

