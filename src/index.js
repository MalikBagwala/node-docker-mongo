const express = require("express");
const mongoose = require("mongoose");
import userRouter from "./user/user.routes";
const app = express();
mongoose.connect("mongodb://mongo:27017/app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/users", userRouter);
app.get("/", (_, res) => {
  res.send("Home");
});
app.listen(8000, () => {
  console.log("Server Running : 8000");
});
