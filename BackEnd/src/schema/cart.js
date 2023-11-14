import joi from "joi";

const cartSchema = new joi.object({
    userId: joi.string().required(),
    bookId: joi.string().required(),
    quantity: joi.number().required(),
})

export default cartSchema