require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/user.model");

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).send({ message: `Wrong Email, Register first` });
    }
    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error in Comparing password: ${err.message}` });
      }

      if (result) {
        const token = jwt.sign(
          {
            username: user.username,
            email: user.email,
            phone: user.phone,
            userID: user._id,
          },
          process.env.JWT_SECRET
        );

        res.status(200).send({ message: "Login successful", "token": token, user });
      }
    });
  } catch (error) {
    res.status(500).send({ message: `Wrong Credentials: ${error.message}` });
  }
};

module.exports = userLogin;
