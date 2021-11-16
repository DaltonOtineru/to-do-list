const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");
let toDoContainer = document.getElementById("to-do-container");
let toDoTask = document.getElementById("to-do-task");


////// Add new To do task to list //////

addButton.addEventListener("click", function() {
    if(inputField.value === ""){
        alert("Task cannot be empty")
    } else {
        let paragraph = document.createElement('p');
        toDoTask.appendChild(paragraph);
        paragraph.innerHTML = inputField.value;
    }
    inputField.value = "";
    // const trashButton = document.createElement('button');
    // trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // toDoContainer.appendChild(trashButton);
})
  
    

////// Enable enter to add to do task //////
inputField.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        document.getElementById("add-button").click();
    }
});