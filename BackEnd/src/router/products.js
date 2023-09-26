import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/products";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router()
router.get('/products',checkPermission,getAll)
router.get('/products/:id',checkPermission,getById)
router.post('/products',checkPermission,create)
router.put('/products/:id',checkPermission,update)
router.delete('/products/:id',checkPermission,remove)


export default router