import { Usuario } from "../../models/usuarios.js";
import 'dotenv/config'
import logger from '../../logs/logger.js'

export async function add_usuarios() {
    const usuarios = [
        {
            "nombre": "Juan Perez",
            "email": "jperez@gmail.com",
            "password": "DockerFile1",
            "rolId": 1
        },
        {
            "nombre": "Laura Caceres",
            "email": "lcaceres@gmail.com",
            "password": "DockerFile2",
            "rolId": 1
        },
        {
            "nombre": "Juan Lopez",
            "email": "jlopez@gmail.com",
            "password": "DockerFile3",
            "rolId": 2
        }
    ];
    try {
        for (const usuario of usuarios) {
            //TODO encrypt the password
            const { password, rolId, ...userData } = usuario
            await Usuario.findOrCreate({
                where: { email: usuario.email },
                defaults: {
                    ...userData,
                    contraseña: usuario.password,
                    rolId: usuario.rolId

                }
            });
        }
        logger.info("Uuarios predefinidos insertados correctamente.");
    } catch (error) {
        logger.error('Error al insertar usuarios predefinidos: ', error);

    }



    console.log("Roles predefinidos insertados correctamente.");
}