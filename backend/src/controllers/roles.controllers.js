import logger from '../logs/logger.js';
import { Rol } from '../models/roles.js';

async function getRoles(req, res) {
    try {
        const roles = await Rol.findAll({
            attributes: ['id', 'nombre'],
            order: [['id', 'ASC']]
        });
        logger.info('Obtenida lista de roles', { roles });
        return res.json(roles);
    } catch (err) {
        logger.error('Error getRoles', err);
        res.status(500).json({ message: 'Error al obtener los roles' });
    }

}

async function getRoleById(req, res) {
    try {
        const id = req.params.id;
        const role = await Rol.findByPk(id, {
            attributes: ['id', 'nombre', 'updatedAt', 'createdAt'],
        });
        logger.info('Role por Id', { role });
        return res.json(role);
    } catch (err) {
        logger.error('Error getRoleById', err);
        res.status(500).json({ message: 'Error al obtener getRoleById' });
    }
}


async function createRole(req, res) {
    try {
        const { nombre } = req.body;
        const role = await Rol.create({ nombre });
        logger.info('Role creado', { role });
        return res.json(role);
    } catch (err) {
        logger.error('Error al crear Role', err);
        res.status(500).json({ message: 'Error al crear Role' });
    }
}

async function updateRole(req, res) {
    const id = req.params.id;
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ message: 'nombre es requerido' });
    try {
        const role = await Rol.findByPk(id)
        if (!role) { return res.status(404).json({ message: 'role no encontrado' }); }
        role.nombre = nombre;
        await role.save();
        res.json(role)

    } catch (error) {
        logger.error(`Error al actualizar marca: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
}

async function deleteRole(req, res) {
    const id = req.params.id;
    try {
        const role = await Role.findByPk(id)
        if (!role) { return res.status(404).json({ message: 'Role no encontrado' }); }
        await role.destroy();
        res.json({ message: 'Role eliminado.' });

    } catch (error) {
        logger.error(`Error al eliminar role: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
}

export default {
    getRoles,
    getRoleById,
};
