
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
    sale_off:{
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
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    }
    
},{timestamps:true, versionKey:false})

productSchema.plugin(mongoosePaginate)


export default mongoose.model("Products", productSchema)