const CartModel = require("../../models/cart.model");

const removeFromCart = async (req, res) => {
  const { productId } = req.params;
  const userID = req.body.userID; // Using userID from req.body as set by the auth middleware

  console.log("Product ID:", productId);
  console.log("User ID:", userID);

  try {
    const cartItem = await CartModel.findOne({ productId: productId, userID: userID });
    console.log("Cart Item:", cartItem);

    if (!cartItem) {
      return res.status(404).send({ message: "Item not found in cart" });
    }

    await CartModel.findByIdAndDelete(cartItem._id);
    res.status(200).send({ message: "Item removed from cart." });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = removeFromCart;