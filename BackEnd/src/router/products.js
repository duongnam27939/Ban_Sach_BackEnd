import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/products";

const router = express.Router()
router.get('/products',getAll)
router.get('/products/:id',getById)
router.post('/products',create)
router.put('/products/:id',update)
router.delete('/products/:id',remove)


export default router