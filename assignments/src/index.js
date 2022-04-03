import "./index.css";
import logo from "./note-taking.jpg";
//image imported and appended
const mylogo = new Image();
mylogo.src = logo;
document.querySelector("#logo").append(mylogo);
let heading = document.createElement("h3");
heading.innerText = "Notes APP";
document.querySelector("#logo").append(heading);
//getting elements from local storage
let notes = JSON.parse(localStorage.getItem("notes")) || [];
document.getElementById("btn").addEventListener("click", addnote);

appendnotes(notes);

//add button function
function addnote() {
  let note = document.getElementById("note").value;

  let obj = {
    task: note,
  };
  notes.push(obj);
  localStorage.setItem("notes", JSON.stringify(notes));
  appendnotes(notes);
}
//append notes
function appendnotes(note) {
  let taskbox = document.getElementById("task_box");
  taskbox.innerHTML = "";
  note.map((element, index) => {
    let div = document.createElement("span");
    div.classList.add("each_task");
    let p = document.createElement("p");
    let del = document.createElement("button");
    del.innerText = "X";
    del.classList.add("del");
    del.style.color = "red";

    p.innerText = element.task;
    del.addEventListener("click", function () {
      deletenote(index);
    });
    del.style.marginLeft = "50px";
    div.style.display = "flex";
    div.append(p, del);
    taskbox.append(div);
  });
}
//delete function
function deletenote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  appendnotes(notes);
}
