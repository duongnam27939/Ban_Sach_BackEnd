import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Products",
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

export default mongoose.model("Cart", cartSchema);