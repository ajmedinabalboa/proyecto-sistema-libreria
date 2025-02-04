import logger from '../logs/logger.js';
import { Material } from '../models/materiales.js';

async function getMateriales(req, res) {
    try {
        const materiales = await Material.findAll({
            attributes: ['id', 'nombre_material', 'descripcion_material', 'precio_unitario', 'stock_actual', 'stock_minimo', 'fecha_creacion'],
            order: [['id', 'ASC']]
        });
        logger.info('Obtenidos materiales exitosamente', { materiales });
        return res.json(materiales);
    } catch (error) {
        logger.error('Error getMateriales', err);
        res.status(500).json({ message: 'Error al obtener Materiales' });
    }
}

async function createMateriales(req, res) {
    try {
        const { nombre_material, descripcion_material, precio_unitario, stock_actual, stock_minimo, id_categoria, id_marca, id_unidadmedida, id_proveedor } = req.body;
        const material = await Material.create({ nombre_material, descripcion_material, precio_unitario, stock_actual, stock_minimo, id_categoria, id_marca, id_unidadmedida, id_proveedor });
        logger.info('Material creado', { material });
        return res.json(material);
    } catch (err) {
        logger.error('Error al crear Material', err);
        res.status(500).json({ message: 'Error al crear el Material' });
    }
}

export default {
    getMateriales,
    createMateriales
};