require("dotenv").config();
const express = require("express");
const app = express();
const authorRoute = require("./controllers/authorController");
const blogRouter = require("./controllers/blogController");
const userRouter = require("./controllers/userController");
const loginRouter = require("./controllers/loginController");
const PORT = process.env.PORT || 3001;
const { connectToDatabase } = require("./util/db");
app.use(express.json());

app.use("/api/blogs", blogRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/authors", authorRoute);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
