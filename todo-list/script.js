"use strict"

const { spawn } = require("child_process");

function adddTask(){
    const input = document.getElementById("taskInput");
    const taskText = input.ariaValueMax.trim();

    if(taskText !== ""){
        const li = document.createElement("li");
        li.innerHTML = `<span onClick="toggleComplete(this)">${taskText}</span>
        <div class="task-buttons">
            <button onClick="deleteTask(this)">Eliminar</button>
        </div>
        `;
        document.getElementById("taskList").appendChild(li);
        input.value = "";
    }
}

function deleteTask(btn){
    btn.closest("li").remove();
}

function toggleComplete(span){
    span.classList.toggle("task-complete");
}