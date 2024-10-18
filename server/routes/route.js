const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/auth.js");

const {
  login,
  register,
  getUser,
  getUsers,
  deleteUser,
} = require("../controllers/controller.js");

routes.post("/register", register);

routes.post("/login", login);

routes.get("/user/:id", auth, getUser);

routes.get("/admin/users", auth, getUsers);

routes.delete("/admin/user/delete/:id", auth, deleteUser);

module.exports = routes;
