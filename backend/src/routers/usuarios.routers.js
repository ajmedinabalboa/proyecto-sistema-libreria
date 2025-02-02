import { Router } from "express";
import usersController from "../controllers/usuario.controllers.js";
import { verificarRol } from "../middleweares/verificarRol.js";

const router = Router();

router.get('/', verificarRol(["admin"]), usersController.getUsers);
router.post('/', usersController.createUser);

// Ruta de prueba para diferentes roles
router.get('/admin', verificarRol(["admin"]), (req, res) => {
    res.json({ mensaje: "Bienvenido, administrador" });
});

router.get('/profesor', verificarRol(["profesor"]), (req, res) => {
    res.json({ mensaje: "Bienvenido, profesor" });
});

router.get('/almacen', verificarRol(["almacen"]), (req, res) => {
    res.json({ mensaje: "Bienvenido, almacen" });
});

export default router;