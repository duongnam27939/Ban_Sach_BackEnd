import express from 'express'
import { create, get, getAll, remove, update } from '../controllers/category'
import { checkPermission } from '../middlewares/checkPermission'
const router = express.Router()
router.get('/category',checkPermission,getAll)
router.get('/category/:id',checkPermission,get)
router.post('/category',checkPermission,create)
router.patch('/category/:id',checkPermission,update)
router.delete('/category/:id',checkPermission,remove)


export default router