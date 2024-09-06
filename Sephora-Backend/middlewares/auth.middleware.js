const jwt = require('jsonwebtoken')
require('dotenv').config()


const userAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userID = decoded.userID;

    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = userAuth;
