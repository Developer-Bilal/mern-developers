const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPass: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
