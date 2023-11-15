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
  status:joi.string().required("status không được để trống"),
  company:joi.string().required("company không được bỏ trống"),
  numberpages:joi.number().required("numberpages không được bỏ trống"),
  size:joi.string().required("size không được bỏ trống"),
  publish:joi.string().required("publish không được bỏ trống"),
  mass:joi.number().required("mass không được bỏ trống"),
  categoryId: joi.string().required("categoryId là trường dữ liệu bắt buộc"),
});