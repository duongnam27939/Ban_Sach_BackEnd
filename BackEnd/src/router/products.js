import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/products";
import { checkPermission } from "../middlewares/checkPermission";
import { addToCart, getCartItems, removeFromCart } from "../controllers/cart";

const router = express.Router()
router.get('/products',getAll)
router.get('/products/:id',getById)
router.post('/products',checkPermission,create)
router.patch('/products/:id',checkPermission,update)
router.delete('/products/:id',checkPermission,remove)
router.post('/products/:id/addtocart', addToCart); 
router.delete('/products/:id/removefromcart', removeFromCart);
router.get('/cart', getCartItems); 


export default router