const express = require("express");
const {
  signup,
  login,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("./users.controller");
const { validateUser } = require("../../middlewares/validation");
const {
  AdminAuthorized,
  canDeleteUser,
} = require("../../middlewares/adminAcsess");
const authorizeUpdateUser = require("../../middlewares/authorizeUpdateUser");

const router = express.Router();

router.post("/signup", validateUser, signup);

router.post("/login", login);

router.get("/", AdminAuthorized, getUsers);

router.get("/:id", AdminAuthorized, getUserById);

router.patch("/:id", authorizeUpdateUser, validateUser, updateUserById);

router.delete("/:id", canDeleteUser, deleteUserById);

module.exports = router;
