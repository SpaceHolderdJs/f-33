const todosWrapper = document.querySelector("#todos-wrapper");

class TodoApplication {
  constructor(todos) {
    this.todos = todos;

    localStorage.setItem("todos", JSON.stringify(todos));

    this.renderTodos(todos);
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.renderTodos(this.todos);

    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  removeTodo(id, text) {
    // H/W - remove the TODO and re-render the list
  }

  renderTodos(todos) {
    todosWrapper.innerHTML = "";

    todos.forEach((todo) => {
      const { id, title, isDone } = todo;

      const wrapper = document.createElement("div");
      wrapper.className = "todo-item";

      // checkbox input
      const check = document.createElement("input");
      check.type = "checkbox";
      check.checked = isDone;
      check.onchange = () => {
        console.log("Check");
      };
      wrapper.appendChild(check);

      // title
      const p = document.createElement("p");
      p.textContent = title;
      wrapper.appendChild(p);

      // delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => {
        console.log("Delete");
      };
      wrapper.appendChild(deleteButton);

      todosWrapper.appendChild(wrapper);
    });
  }
}

class Todo {
  constructor(id, title, isDone) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
  }

  update(updates) {
    for (const update in updates) {
      this[update] = updates[update];
    }

    return this;
  }
}

const APPLICATION = new TodoApplication([new Todo(0, "Feed the cat", false)]);

const createTodoForm = document.querySelector("#create-todo-form");
const todoInput = document.querySelector("#todo-title");

createTodoForm.onsubmit = (event) => {
  event.preventDefault();

  const id = APPLICATION.todos.length;
  const title = todoInput.value;
  const isDone = false;

  const newTodo = new Todo(id, title, isDone);

  APPLICATION.addTodo(newTodo);

  todoInput.value = "";
};
