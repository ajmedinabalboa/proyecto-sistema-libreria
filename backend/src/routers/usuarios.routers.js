import { Router } from "express";
import usersController from "../controllers/usuario.controllers.js";



const router = Router();
router.route('/').get(usersController.getUsers).post(usersController.createUser);

export default router;