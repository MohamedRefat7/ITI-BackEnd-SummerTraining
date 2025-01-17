const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// Sample in-memory database
let todos = [];

// Get all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// Get a single todo by ID
router.get("/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === req.params.id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
});

// Create a new todo
router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("status")
      .isIn(["to-do", "in-progress", "done"])
      .withMessage("Invalid status"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, status } = req.body;
    const newTodo = { id: Date.now().toString(), title, status };

    todos.push(newTodo);

    res.status(201).json(newTodo);
  }
);

// Update a todo by ID
router.put(
  "/:id",
  [
    body("title").optional().notEmpty().withMessage("Title is required"),
    body("status")
      .optional()
      .isIn(["to-do", "in-progress", "done"])
      .withMessage("Invalid status"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const todo = todos.find((todo) => todo.id === req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    const { title, status } = req.body;

    if (title) {
      todo.title = title;
    }

    if (status) {
      todo.status = status;
    }

    res.json(todo);
  }
);

// Delete a todo by ID
router.delete("/:id", (req, res) => {
  const index = todos.findIndex((todo) => todo.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(index, 1);

  res.sendStatus(204);
});

module.exports = router;
