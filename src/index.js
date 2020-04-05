const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./user/user.model");
const app = express();
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", async (_, res) => {
  try {
    const test = new User({ name: "Malik" });

    // const users = await User.find({ name: "Malik" });
    // console.log(users);
    res.json({
      message: "success",
      // list: users,
      data: test,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.listen(8000, () => {
  console.log("Server Running : 8000");
});
