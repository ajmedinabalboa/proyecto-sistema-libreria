import logger from '../logs/logger.js';
import { Usuario } from '../models/usuarios.js';

async function getUsers(req, res) {
    try {
        const users = await Usuario.findAll({
<<<<<<< HEAD:backend/src/controllers/usuario.controllers.js
            attributes: ['id', 'nombre', 'email', 'contraseña', 'rolId'], 
=======
            attributes: ['id', 'nombre', 'email', 'contraseña'],
>>>>>>> a2acded5c95b7c1079d68ebb9da7a9f5ded89671:backend/src/controllers/usuarios.controllers.js
            order: [['id', 'DESC']],

        });
        return res.json(users);
    } catch (error) {
        logger.error('Error getUsers', + error);
        res.status(500).json({ message: 'server error' });
    }

}

async function createUser(req, res) {
    try {
<<<<<<< HEAD:backend/src/controllers/usuario.controllers.js
        const {nombre, email, contraseña, rolId } = req.body;
        const user = await Usuario. create({ nombre, email, contraseña, rolId });
=======
        const { nombre, email, contraseña } = req.body;
        const user = await Usuario.create({ nombre, email, contraseña });
>>>>>>> a2acded5c95b7c1079d68ebb9da7a9f5ded89671:backend/src/controllers/usuarios.controllers.js
        res.json(user);
    } catch (error) {
        logger.error('Error createUser: ', + error);
        res.status(500).json({ message: 'Server error' });
    }
}

export default {
    getUsers,
    createUser
};
