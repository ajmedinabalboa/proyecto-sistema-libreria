import { Router } from "express";
import materialesController from "../controllers/materiales.controllers.js";

const router = Router();
router.route('/')
  .get(materialesController.getMateriales)
  .post(materialesController.createMaterial);

router.route('/:id')
  .get(materialesController.getMaterialById)
  .patch(materialesController.updateMaterial)
  .delete(materialesController.deleteMaterial);
  
export default router;