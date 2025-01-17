require("./db");
const express = require("express");
const todosRouter = require("./todosRouter");
const errorHandler = require("./errorHandler");

const app = express();

app.use(express.json());

// Mount the TODOs router at '/todos'
app.use("/todos", todosRouter);

// Use the global error handler middleware
app.use(errorHandler);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
