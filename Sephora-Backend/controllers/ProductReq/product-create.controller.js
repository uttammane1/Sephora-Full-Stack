const ProductModel = require("../../models/product.model");

const productCreate = async (req, res) => {
  const data = req.body;
  try {
    const newProduct = new ProductModel(data);

    await newProduct.save();

    res
      .status(201)
      .send({ message: "Product Added Successfully", Product: newProduct });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


module.exports = productCreate