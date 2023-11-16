import Products from "../model/products";
import { productSchema } from "../schema/products";
import Category from "../model/category";


export const getAll = async (req, res) => {
  try {
    const products = await Products.find().populate('categoryId');
    return res.json({
      products,
    });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};


export const create = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.json({
        message: error.details.map((err) => err.message),
      });
    }

    const products = await Products.create(req.body);

    await Category.findByIdAndUpdate(products.categoryId, {
      $addToSet: {
        products: products._id,
      },
    });
    if (products.length === 0) {
      return res.json({
        message: "Không thêm được sản phẩm",
      });
    }

    return res.json({
      message: "thêm sản phẩm thành công",
      products,
    });
  } catch ({ errors }) {
    return res.json({
      message: errors,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const products = await Products.findByIdAndDelete({ _id: req.params.id });
    return res.json({
      message: "Xóa sản phẩm thành công",
    });
  } catch (errors) {
    return res.json({
      message: errors,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const products = await Products.findById(req.params.id).populate("categoryId");
    if (products.length === 0) {
      return res.json({
        message:"Không có dữ liệu",
      });
    }
    
    return res.json({
      message:"danh sách getById",
      products,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};



export const update = async (req, res) => {

  try {
    const products = await Products.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (products.length === 0) {
      return res.json({
        message: "Cập nhật sản phẩm không thành công",
      });
    }
    return res.json(products);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};





