const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {type:String, required:true},
  phone: { type: Number, required: true },
  ZIP: { type: Number, required: true },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
