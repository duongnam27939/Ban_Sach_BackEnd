import express from "express"
import mongoose from "mongoose";
import productsRouter from '../src/router/products'
import categoryRouter from '../src/router/category'
import authRouter from '../src/router/auth'



const app = express();
app.use(express.json());
app.use('/api',productsRouter)
app.use('/api/',categoryRouter)
app.use('/api/',authRouter)



mongoose.connect("mongodb://127.0.0.1:27017/DATT")
export const viteNodeApp = app;