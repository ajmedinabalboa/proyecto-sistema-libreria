import { Usuario } from "../models/usuarios.js";
import { Rol } from "../models/roles.js";

export const verificarRol = (rolesPermitidos) => {
    return async (req, res, next) => {
        try {
            const usuario = await Usuario.findByPk(req.usuario.id, {
                include: { model: Rol } // 🔹 Carga correctamente el rol del usuario
            });

            if (!usuario || !rolesPermitidos.includes(usuario.Rol.id)) { // 🔹 Usa usuario.Rol.id en lugar de usuario.rol.id
                return res.status(403).json({ mensaje: "Acceso denegado" });
            }

            next();
        } catch (error) {
            res.status(500).json({ mensaje: "Error de autenticación" });
        }
    };
};