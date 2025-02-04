import { Router } from "express";
import categoriasController from "../controllers/categorias.controllers.js";


const router = Router();
router.route('/').get(categoriasController.getCat).post(categoriasController.createCat);

export default router;