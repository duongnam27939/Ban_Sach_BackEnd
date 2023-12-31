import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    author: {
      type: String,
    },
    price: {
      type: Number,
    },
    sale: {
      type: Number,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    images: {
      type: String,
    },
    tags: {
      type: String,
    },
    status: {
      type: String,
    },
    company: {
      type: String,
    },
    numberpages: {
      type: Number,
    },
    size: {
      type: String,
    },
    publish: {
      type: String,
    },
    mass: {
      type: Number,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    feedbacks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feedback",
        autopopulate: true,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate);

export default mongoose.model("Products", productSchema);
