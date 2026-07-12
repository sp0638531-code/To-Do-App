const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");

const totalTask=document.getElementById("totalTask");
const completedTask=document.getElementById("completedTask");

function updateCounter(){

let total=document.querySelectorAll("#taskList li").length;

let completed=document.querySelectorAll(".checked").length;

totalTask.innerHTML=total;
completedTask.innerHTML=completed;

localStorage.setItem("tasks",taskList.innerHTML);

}

function addTask(){

if(taskInput.value===""){
alert("Please Enter a Task");
return;
}

let li=document.createElement("li");

li.innerHTML=`
<span>${taskInput.value}</span>

<div class="action-btn">

<button class="edit">
<i class="fa-solid fa-pen"></i>
</button>

<button class="delete">
<i class="fa-solid fa-trash"></i>
</button>

</div>
`;

taskList.appendChild(li);

taskInput.value="";

updateCounter();

}

taskList.addEventListener("click",function(e){

if(e.target.closest(".delete")){

e.target.closest("li").remove();

updateCounter();

}

else if(e.target.closest(".edit")){

let li=e.target.closest("li");

let text=li.querySelector("span");

let newTask=prompt("Edit Task",text.innerText);

if(newTask!=null && newTask!=""){

text.innerText=newTask;

updateCounter();

}

}

else if(e.target.tagName==="SPAN"){

e.target.parentElement.classList.toggle("checked");

updateCounter();

}

});

function showTask(){

taskList.innerHTML=localStorage.getItem("tasks") || "";

updateCounter();

}

showTask();