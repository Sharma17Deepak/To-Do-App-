let input = document.getElementById("inp"); 
let dataList = document.querySelector(".list"); 
function Add() { 
  if (input === "") { 
    alert("Please enter something ..."); 
  } else { 
    let newEle = document.createElement("ul"); 
    newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
    dataList.appendChild(newEle); 
    input.value = ""; 
    newEle.querySelector("i").addEventListener("click" , remove); 
    function remove(){ 
      newEle.remove(); 
    } 
  } 
}


/* Code with localstorage...

let input = document.getElementById("inp");
let dataList = document.querySelector(".list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => {
  createTask(task);
});

function Add() {
  if (input.value === "") {
    alert("Please enter something ...");
  } else {
    tasks.push(input.value);        // save task in array
    saveTasks();                    // save array to localStorage
    createTask(input.value);        // show on UI
    input.value = "";
  }
}

function createTask(task) {
  let newEle = document.createElement("ul");
  newEle.innerHTML = `${task} <i class="fa-solid fa-trash"></i>`;
  dataList.appendChild(newEle);

  newEle.querySelector("i").addEventListener("click", function () {
    removeTask(task, newEle);
  });
}

function removeTask(task, element) {
  tasks = tasks.filter(t => t !== task); // remove from array
  saveTasks();                            // update localStorage
  element.remove();                      // remove from UI
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

*/