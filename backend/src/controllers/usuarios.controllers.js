import logger from '../logs/logger.js';
import { Usuario } from '../models/usuarios.js';

async function getUsers(req, res) {
    try {
        const users = await Usuario.findAll({
            attributes: ['id', 'nombre', 'email', 'contraseña', 'rolId'], 
            order: [['id', 'DESC']],
        });
        return res.json(users);
    } catch (error) {
        logger.error('Error en getUsers:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
}

async function createUser(req, res) {
    try {
        const { nombre, email, contraseña, rolId } = req.body;

        const user = await Usuario.create({ nombre, email, contraseña, rolId });
        res.json(user);
    } catch (error) {
        logger.error('Error createUser: ', + error);
        res.status(500).json({ message: 'Server error' });
    }
}

async function getUser(req, res) {
    try {
        const { email, contraseña } = req.body;
        const user = await Usuario.findOne({ where: { email: email } });
        logger.info('User: ', contraseña);
        if (!user) {
            return res.status(401).json({ message: 'Email o password Invalido' }); // Or 404 Not Found
        }
        if (user.contraseña == contraseña) {
            const userData = {
                nombre: user.nombre,
                rolId: user.rolId
            }
            res.status(200).json(userData);
        }
        else
            res.status(401).json({ message: 'Email o password Invalido' });
    } catch (error) {
        logger.error('Error getUser: ', + error);
        res.status(500).json({ message: 'Error in login' });
    }
}


export default {
    getUsers,
    createUser,
    getUser
};


