import mongoose from "mongoose";

const authSchame = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    images: {
        type: String,
    },
    role:{
        type: String,
        default:"member",
    }
})

export default mongoose.model("Auth",authSchame)