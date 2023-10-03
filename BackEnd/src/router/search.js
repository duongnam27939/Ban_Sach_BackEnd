import express from "express";
import { searchByNameAndDescription, searchNameCategory, searchUserByNameAndEmail } from "../controllers/search";

const router = express.Router();
router.get("/products/search/pr",searchByNameAndDescription);
router.get('/user/search/n',searchUserByNameAndEmail);
router.get('/category/rearch',searchNameCategory)
export default router;