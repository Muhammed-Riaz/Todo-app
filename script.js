

const todoform = document.querySelector(".form-Todo")

const todoinput = document.querySelector(".form-Todo input[type='text']")

const todolist = document.querySelector(".todo-list")

const done = document.querySelector(".todo-btn done")


todoform.addEventListener("submit", (e) => {
  e.preventDefault()
  const newTodotext = todoinput.value
  const newli = document.createElement("li")
  const newLiInnerhtml = `<span class="text">${newTodotext}</span>
        <div class="todo-buttons">
          <button class="todo-btn done">Done</button>
          <button class="todo-btn remove">remove</button>
        </div>`
  newli.innerHTML = newLiInnerhtml;
  todolist.append(newli)
  todoinput.value = "";
})

todolist.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const lispan = e.target.parentNode.previousElementSibling;
    lispan.style.textDecoration = "Line-through"

  }
  if (e.target.classList.contains("remove")) {
    const listli = e.target.parentNode.parentNode
    listli.remove();
  }
})
