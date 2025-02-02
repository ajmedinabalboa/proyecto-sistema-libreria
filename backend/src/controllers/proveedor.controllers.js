import logger from '../logs/logger.js';
import { Proveedor } from '../models/proveedor.js';

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

export default {
    getProveedor,
    createProveedor
};