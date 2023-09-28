import joi from "joi";

export const productSchema = joi.object({
  name: joi.string().required("name là trương dữ liệu bắt buộc"),
  price: joi.number().required("price là trường dữ liệu bắt buộc"),
  sale: joi.number(),
  author: joi.string().required("Author là trường bắt buộc"),
  description: joi.string().required("Description là trường bắt buộc"),
  quantity: joi.number().required("Quantity không được để trống"),
  images: joi.string().required("Images không được bỏ trống"),
  tags:joi.string().required("Tags không được để trống"),
  discount:joi.number().required("Discount không được để trống"),
  status:joi.string().required("status không được để trống"),
  categoryId: joi.string().required("categoryId là trường dữ liệu bắt buộc"),
});