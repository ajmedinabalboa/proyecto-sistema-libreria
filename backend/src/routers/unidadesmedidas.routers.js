import { Router } from "express";
import unidadesmedidasController from "../controllers/unidadesmedidas.controllers.js";

const router = Router();
router.route('/')
    .get(unidadesmedidasController.getUnidadesMedidas)
    .post(unidadesmedidasController.createUnidadMedida);

router.route('/:id')
    .get(unidadesmedidasController.getUnidadesMedidasById)
    .patch(unidadesmedidasController.updateUnidadMedida)
    .delete(unidadesmedidasController.deleteUnidadMedida);

export default router;