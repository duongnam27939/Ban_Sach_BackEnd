import Category from "../model/category";
import { categorySchema } from "../schema/category";

export const create = async (req, res) => {
    try {

        const { error } = categorySchema.validate(req.body);
        if (error) {
          return res.status(400).json({
            message: error.details.map((err) => err.message),
          });
        }
    
        const category = await Category.create(req.body);
        if (category.length === 0) {
            return res.status(201).json({
                message: "không thêm được danh mục"
            });
        }
        return res.json(category)
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


export const getAll = async (req, res) => {
    try {
        const category = await Category.find();
        if (category.length === 0) {
            return res.status(201).json({
                message: "Không có dữ liệu"
            });
        }
        return res.json(category)
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}



export const get = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate("products");
        if (category.length === 0) {
            return res.status(201).json({
                message: "Không có dữ liệu"
            });
        }
        return res.json(category)
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


export const update = async (req, res) => {

    try {
        const category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (category.length === 0) {
            return res.status(200).json({
                message: "Cập nhật danh muc không thành công",
            });
        }
        return res.status(200).json({
            message: "Cập nhật danh muc thành công",
            category,
        });
    } catch (error) {
        return res.status(404).json({
            message: error,
        });
    }
};



export const remove = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete({ _id: req.params.id });
        if (category.length === 0) {
            return res.status(201).json({
                message: "Xóa danh mục thành công",
            });
        }
        return res.json(category)
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}