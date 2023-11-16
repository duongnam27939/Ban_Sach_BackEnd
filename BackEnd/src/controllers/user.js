import Auth from "../model/auth";
import { UserSchema } from "../schema/use";

export const create = async (req, res) => {
    try {
        const { error } = UserSchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.json({
                errors: errors
            })
        }
        const data = await Auth.create(req.body);
        if (data.length === 0) {
            return res.json({
                message: "Không thêm được danh mục",
            });
        }
        return res.json({
            message: "Thêm danh mục thành công",
            data,
        });


    } catch (error) {
        return res.json({
            message: error.message,
        });

    }
}

export const update = async (req, res) => {

    try {
        const data = await Auth.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (data.length === 0) {
            return res.json({
                message: "Cập nhật danh muc không thành công",
            });
        }
        return res.json({
            message: "Cập nhật danh muc thành công",
            data,
        });
    } catch (error) {
        return res.json({
            message: error,
        });
    }
}; 


export const remove = async (req, res) => {

    try {
        const data = await Auth.findByIdAndDelete({ _id: req.params.id },{
            new: true,
        });
        return res.json({
            message: "xoa thanh cong",
            data,
        });
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};


export const getOne = async (req, res) => {
    try {

        const data = await Auth.findById(req.params.id)
        if (data.length === 0) {
            return res.json({
                message: "Không có dữ liệu",
            });
        }
        return res.json({
            message: "Danh sách one",
            data,
        });

    } catch (error) {
        return res.json({
            message: error.message,
        });

    }
}


export const getAll = async (req, res) => {
    try {
        const data = await Auth.find();
        if (data.length === 0) {
            return res.json({
                message: "Không có dữ liệu",
            });
        }
        return res.json({
            message: "Danh sách All",
            data,
        });
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};