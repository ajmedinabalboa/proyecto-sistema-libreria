import { Router } from "express";
import proveedorController from "../controllers/proveedores.controllers.js";

const router = Router();
router.route('/')
    .get(proveedorController.getProveedor)
    .post(proveedorController.createProveedor);

export default router;