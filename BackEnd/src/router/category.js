import express from 'express'
import { create, get, getAll, remove, updata } from '../controllers/category'

const router = express.Router()
router.get('/category',getAll)
router.get('/category/:id',get)
router.post('/category',create)
router.put('/category/:id',updata)
router.delete('/category/:id',remove)


export default router