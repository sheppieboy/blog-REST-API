const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");

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
server.use("/api/users", userRoute);
server.use("/api/posts", postRoute);
server.use("./api/categories", categoryRoute);

server.listen(port, () => {
  console.log(`Server is ready to rip at port ${port}`);
});
