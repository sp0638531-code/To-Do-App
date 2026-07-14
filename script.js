const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const totalTask = document.getElementById("totalTask");
const completedTask = document.getElementById("completedTask");

// Update Counter + Save Tasks
function updateCounter() {

    let total = document.querySelectorAll("#taskList li").length;
    let completed = document.querySelectorAll("#taskList li.checked").length;

    totalTask.innerHTML = total;
    completedTask.innerHTML = completed;

    localStorage.setItem("tasks", taskList.innerHTML);
}

// Add Task
function addTask() {

    if (taskInput.value.trim() === "") {
        alert("Please Enter a Task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskInput.value}</span>

        <div class="action-btn">

            <button class="complete">
                <i class="fa-solid fa-check"></i>
            </button>

            <button class="edit">
                <i class="fa-solid fa-pen"></i>
            </button>

            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>

        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    updateCounter();
}

// Press Enter to Add Task
taskInput.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
        addTask();
    }

});

// Button Events
taskList.addEventListener("click", function(e) {

    // Complete Button
    if (e.target.closest(".complete")) {

        let li = e.target.closest("li");

        li.classList.toggle("checked");

        updateCounter();
    }

    // Delete Button
    else if (e.target.closest(".delete")) {

        e.target.closest("li").remove();

        updateCounter();
    }

    // Edit Button
    else if (e.target.closest(".edit")) {

        let li = e.target.closest("li");

        let text = li.querySelector("span");

        let newTask = prompt("Edit Task", text.innerText);

        if (newTask != null && newTask.trim() != "") {

            text.innerText = newTask;

            updateCounter();
        }
    }
});

// Load Saved Tasks
function showTask() {

    taskList.innerHTML = localStorage.getItem("tasks") || "";

    updateCounter();
}

showTask();
