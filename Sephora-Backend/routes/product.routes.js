const express = require("express");
const productCreate = require("../controllers/ProductReq/product-create.controller");
const productGet = require("../controllers/ProductReq/product-get.controller");
const productCategories = require("../controllers/ProductReq/product-getCategories.controller");
const productSingleProduct = require("../controllers/ProductReq/product-getSingleProducts.controller");
const productRouter = express.Router();

productRouter.get("/", productGet);
productRouter.get("/categories", productCategories);
productRouter.get("/:id", productSingleProduct);
productRouter.post("/", productCreate);

module.exports = productRouter;
