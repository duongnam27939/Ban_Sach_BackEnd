import yup from 'yup'

export const feedbackSchema = new yup.object({
    userId: yup.string().required(),
    productId: yup.string().required(),
    content: yup.string().required(),
})