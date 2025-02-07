import { Router } from "express";
import categoriasController from "../controllers/categorias.controllers.js";


const router = Router();
router.route('/')
    .get(categoriasController.getCategorias)
    .post(categoriasController.createCategoria);

router.route('/:id')
    .get(categoriasController.getCategoriaById)
    .patch(categoriasController.updateCategoria)
    .delete(categoriasController.deleteCategoria);

export default router;