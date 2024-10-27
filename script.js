function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");

        listItem.textContent = taskText;
        listItem.ondblclick = () => editTask(listItem);
        listItem.onclick = () => toggleTaskCompleted(listItem);

        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "X";
        deleteBtn.className = "close";
        deleteBtn.onclick = () => deleteTask(listItem);

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}

function deleteTask(element) {
    element.remove();
}

function editTask(element) {
    const newText = prompt("Edit task:", element.textContent.replace("X", "").trim());
    if (newText) {
        element.firstChild.textContent = newText;
    }
}

function toggleTaskCompleted(element) {
    element.style.textDecoration = element.style.textDecoration === "line-through" ? "none" : "line-through";
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = document.getElementById("bgColor").value;
}

function increaseFontSize() {
    document.body.style.fontSize = (parseInt(getComputedStyle(document.body).fontSize) + 2) + "px";
}

function decreaseFontSize() {
    document.body.style.fontSize = (parseInt(getComputedStyle(document.body).fontSize) - 2) + "px";
}

function toggleDarkMode() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}

function toggleFontStyle() {
    document.body.style.fontFamily = document.body.style.fontFamily === "sans-serif" ? "serif" : "sans-serif";
}
