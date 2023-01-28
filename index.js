const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

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

//routes
server.use("/api/auth", authRoute);

server.listen(port, () => {
  console.log(`Server is ready to rip at port ${port}`);
});
