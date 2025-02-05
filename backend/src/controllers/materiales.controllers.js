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

async function getMaterialById(req, res){
    try {
        const id = req.params.id;
        const material = await Material.findByPk(id, {
            attributes: ['id', 'nombre_material', 'descripcion_material', 'precio_unitario','stock_actual','stock_minimo', 'fecha_creacion', 'id_categoria', 'id_marca', 'id_unidadmedida', 'id_proveedor', 'updatedAt', 'createdAt'],
        });
        logger.info('Material obtenido', { material });
        return res.json(material);
    } catch (error) {
        logger.error('getMaterialesById Error al obtener Material', err);
        res.status(500).json({ message: 'getMaterialesById Error al obtener Material' });
    }
}

async function createMaterial(req, res) {
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

async function updateMaterial(req, res) {
    const id = req.params.id;
    const { nombre_material, descripcion_material, precio_unitario, stock_actual, stock_minimo, id_categoria, id_marca, id_unidadmedida, id_proveedor } = req.body;
    if (!nombre_material || !precio_unitario) {
        return res.status(400).json({ message: 'Nombre de Material y Precio Unitario son requeridos' });
    }
    try {
        const material = await Material.findByPk(id);
        if (!material) {
            return res.status(404).json({ message: 'Material no encontrado' });
        }
        Object.assign(material, { nombre_material, descripcion_material, precio_unitario, stock_actual, stock_minimo, id_categoria, id_marca, id_unidadmedida, id_proveedor });
        await material.save();
        res.json(material);
    } catch (err) {
        logger.error(`Error al actualizar Material: ${err.message}`);
        res.status(500).json({ message: 'Error al actualizar el Material' });
  }
}

async function deleteMaterial(req, res) {
    const id = req.params.id;
    try {
        const material = await Material.findByPk(id);
        if (!material) {
            return res.status(404).json({ message: 'Material no encontrado' });
        }
        await material.destroy();
        res.json({ message: 'Material eliminado exitosamente' });
    } catch (err) {
        logger.error(`Error al eliminar Material: ${err.message}`);
        res.status(500).json({ message: 'Error al eliminar el Material' });
    }
}

export default {
    getMateriales,
    createMaterial,
    getMaterialById,
    updateMaterial,
    deleteMaterial
};