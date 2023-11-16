import yup from "yup";

const cartSchema = new yup.object({
    userId: yup.string().required(),
    productId: yup.string().required(),
    quantity: yup.number().required(),
    total: yup.number(),
})

export default cartSchema