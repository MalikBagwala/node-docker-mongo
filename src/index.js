const express = require("express");
const mongoose = require("mongoose");
import bodyParser from "body-parser";
import userRouter from "./user/user.routes";
import User from "./user/user.model";
import jwt from "jsonwebtoken";
require("dotenv").config();
const app = express();
mongoose.connect("mongodb://mongo:27017/app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/users", userRouter);
app.get("/", (_, res) => {
  res.send("Home");
});

app.post("/login", async (req, res) => {
  const credentials = {
    email: req.body?.email,
    password: req.body?.password,
  };
  try {
    const user = await User.findOne(credentials);
    jwt.sign(credentials, process.env.SECRET_KEY, (err, token) => {
      res.status(200).json({
        status: 200,
        data: { user, token },
      });
    });
  } catch (error) {
    res.status(401).json({
      status: 401,
      data: null,
    });
  }
});

// Start Server Here
app.listen(8000, () => {
  console.log("Server Running : 8000");
});
