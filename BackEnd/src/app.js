import express from "express"
import mongoose from "mongoose";
import productsRouter from '../src/router/products'



const app = express();
app.use(express.json());
app.use('/api',productsRouter)



mongoose.connect("mongodb://127.0.0.1:27017/DATT")
export const viteNodeApp = app;