const mongoose = require("mongoose");

async function connectdb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/userdb", {
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    throw error;
  }
}

module.exports = { connectdb };
