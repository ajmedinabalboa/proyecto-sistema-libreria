import { Router } from "express";
import usersController from "../controllers/usuarios.controllers.js";

const router = Router();

router.post('/', usersController.getUser);

export default router;