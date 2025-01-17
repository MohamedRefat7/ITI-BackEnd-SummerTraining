const express = require("express");
const { connectdb } = require("./db");
const usersRouter = require("./routes/users");
const port = 5000;
const app = express();
app.use(express.json());

connectdb();

app.use("/users", usersRouter);

function errorHandler(err, req, res, next) {
  console.error(err.stack);

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((error) => error.message);
    return res
      .status(400)
      .json({ message: `Validation error: ${errors.join(", ")}` });
  }

  if (err.name === "MongoError" && err.code === 11000) {
    return res.status(400).json({ message: "Email already exists." });
  }

  res.status(500).json({ message: "Internal server error." });
}

app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
//25
//27
//30
