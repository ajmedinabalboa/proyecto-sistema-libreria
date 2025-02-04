import { Router } from "express";
import materialesController from "../controllers/materiales.controllers.js";

const router = Router();
router.route('/')
  .get(materialesController.getMateriales)
  .post(materialesController.createMateriales);

export default router;