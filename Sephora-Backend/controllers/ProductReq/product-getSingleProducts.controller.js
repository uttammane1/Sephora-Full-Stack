const ProductModel = require("../../models/product.model");

const productSingleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.findOne({ _id: id });
    res.status(200).send({ Product: product });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = productSingleProduct;
