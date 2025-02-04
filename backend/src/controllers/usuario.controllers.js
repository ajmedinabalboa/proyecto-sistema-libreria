import logger from '../logs/logger.js';
import { Usuario } from '../models/usuario.js';

async function getUsers(req, res) {
    try {
        const users = await Usuario.findAll({
            attributes: ['id', 'nombre', 'email', 'contraseña', 'rolId'], 
            order: [['id', 'DESC']],
       
        });
        return res.json(users);
    } catch (error) {
        logger.error('Error getUsers', + error);
        res.status(500).json({message: 'server error'});
    }
   
}

async function createUser(req, res) {
    try {
        const {nombre, email, contraseña, rolId } = req.body;
        const user = await Usuario. create({ nombre, email, contraseña, rolId });
        res.json(user);
    } catch (error) {
        logger.error('Error createUser: ', + error);
        res.status(500).json({message: 'Server error'});  
    }
}

export default {
    getUsers,
    createUser
 };
