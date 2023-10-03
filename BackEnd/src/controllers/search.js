import Products from "../model/products";
import Auth from "../model/auth";
import Category from "../model/category";

export const searchByNameAndDescription = async (req, res) => {
  try {
    const { keyword } = req.query;
    const products = await Products.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    });
    if (!products || products.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm với từ khóa này",
      });
    }

    return res.status(200).json({
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const searchUserByNameAndEmail = async (req, res) => {
  try {
    const { keyword } = req.query;
    const products = await Auth.find({
      $or: [{ name: { $regex: keyword, $options: "i" } }],
    });
    if (!products || products.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm với từ khóa này",
      });
    }
    return res.status(200).json({
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const searchNameCategory = async (req, res) => {
  
    try {
        const { keyword } = req.query;
        const categories = await Category.find({ name: new RegExp(keyword, 'i') });
        res.json(categories);
      } catch (error) {
        console.error('Error searching categories', error);
        res.status(500).json({ error: 'Server error' });
      }
};
