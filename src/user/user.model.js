const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: {
    type: String,
  },
  password: {
    type: String,
    minlength: 5,
  },
  contact: {
    type: Number,
    maxlength: 10,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isAuthorized: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", userSchema);

export default User;
