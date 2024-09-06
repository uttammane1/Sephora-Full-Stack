const CartModel = require("../../models/cart.model");

const getCartItems = async (req, res) => {
  const { userID } = req.body;

  try {
    const items = await CartModel.find({ userID });
    res.status(200).send({ items });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = getCartItems;
