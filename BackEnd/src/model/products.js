
import { number, string } from "joi";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const productSchema = new mongoose.Schema({
    
    name:{
        type:String,
    },
    author:{
        type: String,
    },
    price:{
        type:Number,
    },
    sale:{
        type:Number,
    },
    description:{
        type:String,
    },
    quantity:{
        type:Number,
    },
    images:{
        type:String,
    },
    tags:{
        type:String,
    },
    discount:{
        type:Number,
    },
    status:{
        type:String
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    }
    
},{timestamps:true, versionKey:false})

productSchema.plugin(mongoosePaginate)


export default mongoose.model("Products", productSchema)