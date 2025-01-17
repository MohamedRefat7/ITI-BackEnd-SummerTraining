function errorHandler(err, req, res, next) {
  console.error(err);

  // Handle specific errors
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON payload" });
  }

  // Handle generic errors
  res.status(500).json({ error: "Internal server error" });
}

module.exports = errorHandler;
