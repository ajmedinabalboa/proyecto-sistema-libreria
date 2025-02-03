import logger from '../logs/logger.js';
import { Proveedor } from '../models/proveedores.js';

async function getProveedor(req, res) {
    try {
        const proveedor = await Proveedor.findAll({
            attributes: ['id', 'nombre_proveedor'],
            order: [['id', 'ASC']]
        });
        logger.info('Obtenida lista de Proveedores', { proveedor });
        return res.json(proveedor);
    } catch (err) {
        logger.error('Error getProveedor', err);
        res.status(500).json({ message: 'Error al obtener los Proveedores' });
    }
}

async function getProveedorById(req, res) {
    try {
        const id = req.params.id;
        const proveedor = await Proveedor.findByPk(id, {
            attributes: ['id', 'nombre_proveedor', 'updatedAt', 'createdAt'],
        });
        logger.info('Proveedor por Id', { proveedor });
        return res.json(proveedor);
    } catch (err) {
        logger.error('Error getProveedorById', err);
        res.status(500).json({ message: 'Error al obtener proveedorById' });
    }
}

async function createProveedor(req, res) {
    try {
        const { nombre_proveedor } = req.body;
        const proveedor = await Proveedor.create({ nombre_proveedor });
        logger.info('Proveedor creado', { proveedor });
        return res.json(proveedor);
    } catch (err) {
        logger.error('Error al crear Proveedor', err);
        res.status(500).json({ message: 'Error al crear Proveedor' });
    }
}

async function updateProveedor(req, res) {
    const id = req.params.id;
    const { nombre_proveedor } = req.body;
    if (!nombre_proveedor) return res.status(400).json({ message: 'nombre_proveedor es requerido' });
    try {
        const proveedor = await Proveedor.findByPk(id)
        if (!proveedor) { return res.status(404).json({ message: 'Proveedor no encontrado' }); }
        proveedor.nombre_proveedor = nombre_proveedor;
        await proveedor.save();
        res.json(proveedor)

    } catch (error) {
        logger.error(`Error al actualizar proveedor: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
}

async function deleteProveedor(req, res) {
    const id = req.params.id;
    try {
        const proveedor = await Proveedor.findByPk(id)
        if (!proveedor) { return res.status(404).json({ message: 'Proveedor no encontrado' }); }
        await proveedor.destroy();
        res.json({ message: 'Proveedor eliminado.' });

    } catch (error) {
        logger.error(`Error al eliminar proveedor: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
}


export default {
    getProveedor,
    createProveedor,
    getProveedorById,
    updateProveedor,
    deleteProveedor,
};