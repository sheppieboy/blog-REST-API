const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const server = express();
const port = 3000;

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_CONNECTION, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("MongoDB connected");
});

server.use(express.json());

server.listen(port, () => {
  console.log("Server is read to rip");
});
