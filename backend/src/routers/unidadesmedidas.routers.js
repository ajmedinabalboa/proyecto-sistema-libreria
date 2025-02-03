import { Router } from "express";
import unidadesmedidasController from "../controllers/unidadesmedidas.controllers.js";

const router = Router();
router.route('/')
    .get(unidadesmedidasController.getUnidadesMedidas)
    .post(unidadesmedidasController.createUnidadMedida);

export default router;