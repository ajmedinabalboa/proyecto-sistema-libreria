import { Usuario } from "../models/usuario.js";
import { Rol } from "../models/Rol.js";

export const verificarRol = (rolesPermitidos) => {
    return async (req, res, next) => {
        try {
            const usuario = await Usuario.findByPk(req.usuario.id, {
                include: { model: Rol, as: "rol" }
            });

            if (!usuario || !rolesPermitidos.includes(usuario.rol.nombre)) {
                return res.status(403).json({ mensaje: "Acceso denegado" });
            }

            next();
        } catch (error) {
            res.status(500).json({ mensaje: "Error de autenticación" });
        }
    };
};
