const CartModel = require("../../models/cart.model");

const addToCart = async (req, res) => {
  const { userID, quantity = 1 } = req.body;
  const { productId } = req.params;

  try {
    const existingCartItem = await CartModel.findOne({ userID, productId});

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
     await existingCartItem.save();
     return res.status(201).send({message:'Item Quantity Added'})
    }

    const newCartItem = new CartModel({ userID, productId, quantity });
    await newCartItem.save();

    res.status(200).send({ message: "Item added to Cart", newCartItem });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = addToCart;
