import { Router } from "express";
import usersController from "../controllers/usuarios.controllers.js";
import { verificarRol } from "../middleweares/verificarRol.js";

const router = Router();

router.get('/', verificarRol(["admin"]), usersController.getUsers);
router.post('/', usersController.createUser);

// Ruta de prueba para diferentes roles
router.get('/admin', verificarRol(["admin"]), (req, res) => {
    res.json({ mensaje: "Bienvenido, administrador" });
});

router.get('/ventas', verificarRol(["ventas"]), (req, res) => {
    res.json({ mensaje: "Bienvenido, ventas" });
});

router.get('/almacen', verificarRol(["almacen"]), (req, res) => {
    res.json({ mensaje: "Bienvenido, almacen" });
});

export default router;