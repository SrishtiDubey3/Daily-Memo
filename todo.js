const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){   // if there is no task written
        alert("No task added!!!");
    }
    else{
        let li = document.createElement("li");  //creating an HTML element
        li.innerHTML = inputBox.value;  //text in the input field will be added to 'li'
        listContainer.appendChild(li);  //'li' should be displayed in the list conatiner
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // adds the cross icon in front of the added tasks
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){  
    if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");  //to check the task if it is completed
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();  //to remove/delete the task
            saveData();
        }
},false);

function saveData(){     //will save the tasks for the future consideration as well
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){  //will show the list of tasks the next time when we will open the browser
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();