const express = require("express");
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "todo.json");
const users = require("./todo.json");
const app = express();
const port = 3000;
const morgan = require("morgan");
const { todo } = require("node:test");

app.use(express.json());

app.use(morgan("tiny"));

app.post("/todo", (req, res) => {
  const { id, title, status } = req.body;
  const newtodo = {
    id: id,
    title: title,
    status: status,
  };
  users.push(newtodo);
  fs.writeFileSync(file, JSON.stringify(users, null, 2));
  res.status(200).send(users);
});

app.get("/todo", (req, res) => {
  const data = fs.readFileSync(file);
  res.send(data);
});

app.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  const get = users.filter((todo) => +id === +todo.id);
  res.send(get);
});

app.patch("/todo/update/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const { status } = req.body;

  const finduser = users.map((todo) =>
    +id === todo.id
      ? {
          ...todo,
          title,
          status,
        }
      : todo
  );
  fs.writeFileSync(file, JSON.stringify(finduser, null, 2));
  res.status(200).send("Updated");
});

app.delete("/todo/delete/:id", (req, res) => {
  const { id } = req.params;
  const delt = users.filter((todo) => +id !== +todo.id);
  fs.writeFileSync(file, JSON.stringify(delt, null, 2));
  res.send("deleted");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} Successfully 👌👌`);
});
