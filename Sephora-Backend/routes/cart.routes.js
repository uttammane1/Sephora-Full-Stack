const express = require("express");
const userAuth = require("../middlewares/auth.middleware");
const addToCart = require("../controllers/CartReq/addToCart.controller");
const getCartItems = require("../controllers/CartReq/getCartItems.controllers");
const removeFromCart = require("../controllers/CartReq/removeFromCart.controller");
const cart = require("../middlewares/cart.middleware");
const cartRouter = express.Router();

cartRouter.get("/", userAuth, getCartItems);
cartRouter.post("/add/:productId", userAuth,cart, addToCart);
cartRouter.delete("/remove/:productId", userAuth, removeFromCart);

module.exports = cartRouter;
