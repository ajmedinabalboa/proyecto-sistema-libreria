import { Router } from "express";
import categoriasController from "../controllers/categorias.controllers.js";


const router = Router();
router.route('/')
    .get(categoriasController.getCategorias)
    .post(categoriasController.createCategoria);

export default router;