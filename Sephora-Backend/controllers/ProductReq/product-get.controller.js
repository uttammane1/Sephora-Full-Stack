const ProductModel = require("../../models/product.model");

const productGet = async (req, res) => {
  const search = req.query.search;
  const category = req.query.category;

  let query = {};

  if (search) {
    query.$or = [
      { tags: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  if (category) {
    query.category = category;
  }

  try {

    const products = await ProductModel.find(query);

    res.status(200).send({
      totalProducts: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = productGet;
