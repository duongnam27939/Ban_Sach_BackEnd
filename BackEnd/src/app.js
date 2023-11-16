import express from "express"
import mongoose from "mongoose";
import productsRouter from '../src/router/products'
import categoryRouter from '../src/router/category'
import authRouter from '../src/router/auth'
import userRouter from '../src/router/user'
import searchRouter from '../src/router/search'
import cartRouter from '../src/router/cart'
import feedbackRouter from '../src/router/feedback'
import cors from 'cors'



const app = express();
app.use(express.json());
app.use(cors());

app.use('/api',productsRouter)
app.use('/api/',categoryRouter)
app.use('/api/',authRouter)
app.use('/api/',userRouter)
app.use('/api/',searchRouter)
app.use('/api/',cartRouter)
app.use('/api/',feedbackRouter)




mongoose.connect("mongodb://127.0.0.1:27017/DATT")
export const viteNodeApp = app;