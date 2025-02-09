import { Router } from "express";
import roleController from "../controllers/roles.controllers.js";

// Almacena las roles (ej: Administrador, ventas, etc).

const router = Router();
router.route('/')
    .get(roleController.getRoles);

router.route('/:id')
    .get(roleController.getRoleById);


export default router;