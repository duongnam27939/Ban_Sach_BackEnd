import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/products";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router()
router.get('/products',getAll)
router.get('/products/:id',getById)
router.post('/products',checkPermission,create)
router.patch('/products/:id',checkPermission,update)
router.delete('/products/:id',checkPermission,remove)


export default router