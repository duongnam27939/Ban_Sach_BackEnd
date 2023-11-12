import Cart from "../model/cart";
import Products from "../model/products";

export const addToCart = async (req, res) => {
  try {
    const productId = req.params.id;
    const quantity = req.body.quantity || 1;

    const product = await Products.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Sản phẩm không tồn tại" });
    }

    const existingCartItem = await Cart.findOne({ productId });
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
    } else {
      const newCartItem = new Cart({
        productId,
        quantity,
      });
      await newCartItem.save();
    }

    return res.status(200).json({ message: "Sản phẩm đã được thêm vào giỏ hàng" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const removeFromCart = async (req, res) => {
    try {
      const productId = req.params.id;
      const cartItem = await Cart.findOne({ productId });
      if (!cartItem) {
        return res.status(404).json({ message: "Sản phẩm không có trong giỏ hàng" });
      }
  
      await Cart.deleteOne({productId});
  
      return res.status(200).json({ message: "Sản phẩm đã được xóa khỏi giỏ hàng" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const getCartItems = async (req, res) => {
    try {
      const cartItems = await Cart.find().populate("productId");
  
      return res.status(200).json({ cartItems });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };