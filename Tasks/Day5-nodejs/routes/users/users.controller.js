const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const util = require("util");
const c = require("config");
const asyncsign = util.promisify(jwt.sign);

async function signup(req, res) {
  const {
    firstName,
    lastName,
    email,
    password,
    birthyear,
    phoneNumber,
    isAdmin,
  } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already registered.");
    }

    user = new User({
      firstName,
      lastName,
      email,
      password,
      birthyear,
      phoneNumber,
      isAdmin,
    });

    await user.save();

    const token = await user.generateAuthToken();
    res.json({ token, user });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).send(`Validation error: ${errors.join(", ")}`);
    }
    if (error.name === "MongoError" && error.code === 11000) {
      return res.status(400).send("Email already exists.");
    }
    res.status(500).send("Internal server error.");
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid email.");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send("Invalid password.");
    }

    const token = await user.generateAuthToken();
    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
}

async function getUsers(_, res) {
  try {
    const users = await User.find().sort("firstName");
    if (!users) {
      return res.status(404).send("No users found.");
    }
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
}
async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found.");
    }
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
}

async function updateUserById(req, res) {
  const { firstName, lastName, password, birthyear, phoneNumber } = req.body;

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send("User not found.");
    }

    console.log(password);
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }
    console.log(password);

    // Update the user with the new data
    user.firstName = firstName;
    user.lastName = lastName;
    user.birthyear = birthyear;
    user.phoneNumber = phoneNumber;
    user.password = password;
    const updatedUser = await user.save();
    console.log(password);

    res.send(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
}

async function deleteUserById(req, res) {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      return res.status(404).send("User not found.");
    }
    res.send(user);
    console.log("User Deleted ");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
}

module.exports = {
  signup,
  login,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
