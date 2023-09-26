import express from "express";
import { create, getAll, getOne, remove, update } from "../controllers/user";

const router = express.Router();
router.get('/user',getAll)
router.get('/user/:id',getOne)
router.post('/user',create)
router.put('/user/:id',update)
router.delete('/user/:id',remove)


export default router