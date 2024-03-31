
$(document).ready(function() {
    showdata();
});

var list = $(".task-list");
var input = $(".inputbox");
$(".add-task").click(addTask);

function addTask() {
    if (input.val() === "") {
        alert("Please enter your task.");
    } else {
        const task = document.createElement('li');
        task.textContent = input.val();
        list.append(task);

        var jenis = document.createElement("span");
        jenis.textContent = "\u00d7";
        task.append(jenis);
        input.val("");
        savedata();
    }
}


$(".task-list").on("click", "li", function() {
    $(this).toggleClass("checked");
    savedata();
});


$("body").on("click", "span", function() {
    $(this).parent().remove();
    savedata();
});


function savedata() {
    localStorage.setItem("taskList", list.html());
}


function showdata() {
    var storedData = localStorage.getItem("taskList");
    if (storedData) {
        list.html(storedData);
    }
}
