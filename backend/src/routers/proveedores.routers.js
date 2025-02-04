import { Router } from "express";
import proveedorController from "../controllers/proveedores.controllers.js";

const router = Router();
router.route('/')
    .get(proveedorController.getProveedor)
    .post(proveedorController.createProveedor);

router
    .route('/:id')
    .get(proveedorController.getProveedorById)
    .patch(proveedorController.updateProveedor)
    .delete(proveedorController.deleteProveedor);

export default router;