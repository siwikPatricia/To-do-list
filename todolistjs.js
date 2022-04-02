document.querySelector("#addList").onclick = function () {
  document.querySelector("#tasks").innerHTML += `
  <li id="tasks" class="done toDo">
${document.querySelector("#newtask input").value}
  <span id="delete" class="removeBtn ">x</span
  ></span>
</li>`;

  var current_tasks = document.querySelectorAll("#delete");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};
