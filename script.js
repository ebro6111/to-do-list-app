const inputBox = document.getElementById("task");
const listContainer = document.getElementById("list");
const  addBtn=document.getElementById("addTask")

addBtn.addEventListener("click",function() {
    if (inputBox.value === '') {
        alert("no input! please enter your task before add");
    }
    else {
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement("span");
          span.innerHTML = "x";
          list.appendChild(span);
          span.onclick = function () {
                  list.remove();
            };
    }
    inputBox.value = "";
})
listContainer.addEventListener("click", function(evet) {
    if (evet.target.tagName === "LI") {
        evet.target.classList.toggle("checked");
        saveData();
    } else if (evet.target.tagName === "SPAN") {
        evet.target.parentElement.remove();
        saveData();
    }
}, false);