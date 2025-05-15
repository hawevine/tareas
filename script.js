const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// This function adds the task if the condition is met
function addTask(){
    if(inputBox.value === ''){
        alert("escriba su comentario!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);
// This function saves the data
function saveData(){ 
    localStorage.setItem("data", listContainer.innerHTML);
}
// This function shows the task back each time the browser is closed
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
