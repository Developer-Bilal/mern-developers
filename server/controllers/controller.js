const jwt = require("jsonwebtoken");
const Users = require("../models/model.js");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const login = async (req, res) => {
  console.log("login from routes");

  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPass = await bcrypt.compare(password, user.password);

    if (!isPass) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      _id: user.id,
      email: user.email,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const register = async (req, res) => {
  console.log("register routes");

  try {
    const { name, email, phone, profession, password, confirmPass } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const hashConfirmPass = await bcrypt.hash(confirmPass, salt);

    const user = await Users.create({
      name,
      email,
      phone,
      profession,
      password: hashPassword,
      confirmPass: hashConfirmPass,
    });

    return res.status(201).json({
      _id: user.id,
      email: user.email,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Invalid credentials" });
  }
};

const getUsers = async (req, res) => {
  console.log("get users routes");

  try {
    const users = await Users.find({});

    return res.status(200).json({ count: users.length, data: users });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  console.log("Delete a user routes");

  const { id } = req.params;
  try {
    const user = await Users.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ message: "Delete successfully", DeleteUser: user });
  } catch (error) {
    console.log(error);
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT, { expiresIn: "1h" });
};

module.exports = {
  login,
  register,
  getUsers,
  deleteUser,
};
