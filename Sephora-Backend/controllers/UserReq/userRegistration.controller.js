const bcrypt = require("bcrypt");
const UserModel = require("../../models/user.model");

const userRegistration = async (req, res) => {
  const { username, email, password, phone, ZIP } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(401).send({ message: "User already Exists." });
    }

    bcrypt.hash(password, 2, async (err, hash) => {
      if (err) {
        return res.status(500).send("Error in hashing password.");
      }

      const newUser = new UserModel({
        username,
        email,
        password: hash,
        phone,
        ZIP,
      });

      await newUser.save();

      res.status(201).send({
        message: `Congratulations ${username} you are registered`,
        "User": newUser,
      });
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: `Wrong Details try again: ${error.message}` });
  }
};

module.exports = userRegistration;
