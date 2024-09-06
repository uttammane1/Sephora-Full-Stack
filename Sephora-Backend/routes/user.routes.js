const express = require("express");
const userRegistration = require("../controllers/UserReq/userRegistration.controller");
const userLogin = require("../controllers/UserReq/userLogin.controller");
const userRouter = express.Router();

userRouter.post("/register", userRegistration);
userRouter.post("/login", userLogin);

module.exports = userRouter;
