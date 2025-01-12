
const taskInput =document.getElementById("taskInput");
const addTaskBtn =document.getElementById("addTaskBtn");
const taskList =document.getElementById("taskList");


function addTask () {
    const taskText = taskInput.value.trim();
    if (taskText ==="") {
        alert("iltimos vazifani kiriting")
        return;
    } 
    

    const li = document.createElement("li");
    li.textContent =taskText;

    const checkbox =document.createElement("input");
    checkbox.type ="checkbox";
    checkbox.className ="pitichka";

    const label =document.createElement("label");
    label.textContent =taskText;
    label.className ="tanlov";




    const deleteBtn =document.createElement("button");


    deleteBtn.textContent ="o'chirish";
    deleteBtn.className ="delete";
    // deleteBtn.onclick = () => li.remove();

    deleteBtn.onclick =function () {
        li.remove();
    }


    li.appendChild(checkbox);
    li.appendChild(deleteBtn);
    

    taskList.appendChild(li);


    taskInput.value ="";
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key ==="Enter") {
        addTask();
    }
})




let tugma =document.getElementById("tugma");
let kunlar =document.getElementById("Kunlar");
let headerUl = document.getElementById("header-ul");

function qosh () {
    
    tugma.onclick =function(){

        if (kunlar.value ==="") {
            alert("BU joyni bo'sh qolidirb bo'lmaydi")
            return;
        }


        const liChild =document.createElement("li");
        liChild.className ="liChild";

        liChild.textContent =kunlar.value;
        kunlar.value ="";

        const btn =document.createElement("button");

        btn.className ="ochirish";
        btn.textContent ="O'chirish";

        btn.onclick =function() {
         headerUl.removeChild(liChild);
         btn.style.display ="none"; 
        }

        headerUl.appendChild(liChild);
        liChild.appendChild(btn);





}
}


tugma.addEventListener("click", qosh);


