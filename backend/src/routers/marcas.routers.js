import { Router } from "express";
import marcaController from "../controllers/marcas.controllers.js";

// Almacena las marcas de los productos (ej: Faber-Castell, Norma, etc).

const router = Router();
router.route('/')
    .get(marcaController.getMarcas)
    .post(marcaController.createMarca);

router.route('/:id')
    .get(marcaController.getMarcaById)
    .patch(marcaController.updateMarca)
    .delete(marcaController.deleteMarca);

export default router;