const ProductModel = require("../../models/product.model");

const productCategories = async (_, res) => {
  try {
    const products = await ProductModel.find();
    let categories = [];
    let tags = [];

    products.forEach((product) => {
      categories.push(product.category);
      tags.push(product.tags);
    });

    categories = [...new Set(categories)];
    tags = [...new Set(tags)];

    res.status(200).send({ categories, tags });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = productCategories;
