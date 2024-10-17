const express = require("express");
const app = express();
const routes = require("./routes/route.js");
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 5555;

app.use(express.json());
app.use("/api/v1/", routes);

const start = async () => {
  const connectDB = await mongoose.connect(process.env.MONGO_URI);

  if (!connectDB) {
    console.log("Connection Error");
  }

  console.log("Connected Successfully");
  app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });
};

start();
