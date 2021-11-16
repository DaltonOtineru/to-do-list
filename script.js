////// Add new To do task to list //////

// addButton.addEventListener("click", function() {
    //     if(inputField.value === ""){
        //         alert("Task cannot be empty")
        //     } else {
            //         let paragraph = document.createElement('p');
            //         toDoTask.appendChild(paragraph);
            //         paragraph.innerHTML = inputField.value;
            //     }
            //     inputField.value = "";
            //     // const trashButton = document.createElement('button');
            //     // trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
            //     // toDoContainer.appendChild(trashButton);
            // })



//Variables && Selectors

    const inputField = document.getElementById("input-field");
    const addButton = document.getElementById("add-button");
    let toDoContainer = document.getElementById("to-do-container");
    let toDoTask = document.getElementById("to-do-task");
    let toDoList = document.getElementById("to-do-list");

 //event listeners
    document.addEventListener("DOMContentLoaded", getToDos);
    addButton.addEventListener("click", addToDo);
    toDoList.addEventListener("click", deleteCheck);
    

//functions //
        // add new to do //

    function addToDo(event) {
    if(inputField.value === ""){
        alert("Please enter a task :)");
    } else {
    event.preventDefault();
    //todo div
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    //li
    const newToDo = document.createElement("li");
    newToDo.classList.add("todo-item");
    newToDo.innerHTML = inputField.value;
    //append
    toDoDiv.appendChild(newToDo);
    // check btn
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="far fa-check-square"></i>';
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);
    // add todo to local storage
    saveLocalTodos(inputField.value);
    // trash button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    toDoDiv.appendChild(trashButton);
    // append list
    toDoList.appendChild(toDoDiv);}
    inputField.value = "";
}

    // Delete to do //

function deleteCheck(e) {
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        removeLocalToDos(todo);
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
        
    }
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
        
// Enable enter to add to do task //

inputField.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        document.getElementById("add-button").click();
    }
});


////// Local Storage ////////

// save to dos to local storage //

function saveLocalTodos(todo)  {
    let todos;
    // check local storage
    if(localStorage.getItem('todos') === null || ""){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// delete todos from local storage //

function removeLocalToDos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const toDoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(toDoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}


// get to dos from local storage //

function getToDos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
     //todo div
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    //li
    const newToDo = document.createElement("li");
    newToDo.classList.add("todo-item");
    newToDo.innerHTML = todo;
    //append
    toDoDiv.appendChild(newToDo);
    // check btn
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="far fa-check-square"></i>';
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);
    // add todo to local storage
        if(inputField.value !== ""){
        saveLocalTodos(inputField.value);
        }
    // trash button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    toDoDiv.appendChild(trashButton);
    // append list
    toDoList.appendChild(toDoDiv);
});
}
    
    




    




