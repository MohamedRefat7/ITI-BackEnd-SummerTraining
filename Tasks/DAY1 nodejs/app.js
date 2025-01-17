const fs = require("fs");
const { program } = require("commander");
const todoFilePath = "user.json";
const statusOptions = ["todo", "onprogress", "done"];

function addTodo({ id, title, status }) {
  const todos = readTodos();
  const existingTodo = todos.find((todo) => todo.id === id);
  if (existingTodo) {
    console.log(`Todo with id ${id} already exists.`);
  }

  const newTodo = { id, title, status };
  todos.push(newTodo);
  writeTodos(todos);
  console.log("Todo added successfully.");
}

function editTodo({ id, title, status }) {
  const todos = readTodos();
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    console.log(`Todo with id ${id} not found.`);
  }

  if (title) {
    todos[todoIndex].title = title;
  }
  if (status) {
    if (!statusOptions.includes(status)) {
      throw new Error(`Status should be one of: ${statusOptions.join(", ")}`);
    }
    todos[todoIndex].status = status;
  }

  writeTodos(todos);
  console.log("Todo edited successfully.");
}

function deleteTodo({ id }) {
  const todos = readTodos();
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    console.log(`Todo with id ${id} not found.`);
  }

  todos.splice(todoIndex, 1);
  writeTodos(todos);
  console.log("Todo deleted successfully.");
}

function readTodos() {
  const todosData = fs.readFileSync(todoFilePath, "utf8");
  return JSON.parse(todosData);
}

function writeTodos(todos) {
  fs.writeFileSync(todoFilePath, JSON.stringify(todos, null, 2));
}

program
  .command("add")
  .description("Add a new todo")
  .requiredOption("-i, --id <id>", "Todo ID")
  .requiredOption("-t, --title <title>", "Todo title")
  .requiredOption("-s, --status <status>", "Todo status")
  .action(addTodo);

program
  .command("update")
  .description("Edit an existing todo")
  .requiredOption("-i, --id <id>", "Todo ID")
  .option("-t, --title <title>", "New todo title")
  .option("-s, --status <status>", "New todo status")
  .action(editTodo);

program
  .command("delete")
  .description("Delete an existing todo")
  .requiredOption("-i, --id <id>", "Todo ID")
  .action(deleteTodo);

program.parse(process.argv);
