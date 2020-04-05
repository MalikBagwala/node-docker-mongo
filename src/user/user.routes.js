import express from "express";
import User from "./user.model";
const userRouter = express.Router();

userRouter.get("/", (_, res) => {
  User.find().then((users) =>
    res.json({
      status: "200",
      data: users,
    })
  );
});

userRouter.get("/:id", (req, res) => {
  User.findById(req.params?.id)
    .then((user) => {
      res.status(200).json({
        status: "200",
        data: user,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        status: "404",
        data: null,
      });
    });
});

userRouter.post("/", (req, res) => {
  User.findById();
  console.log(req);
});

export default userRouter;
