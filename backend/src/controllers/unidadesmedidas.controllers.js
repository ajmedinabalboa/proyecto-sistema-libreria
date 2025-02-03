import logger from '../logs/logger.js';
import { UnidadMedida } from '../models/unidadesmedidas.js';

async function getUnidadesMedidas(req, res) {
    try {
        const unidadesmedidas = await UnidadMedida.findAll({
            attributes: ['id', 'nombre_unidadmedida'],
            order: [['id', 'ASC']]
        });
        logger.info('Obtenida lista de Unidades de Medidas', { unidadesmedidas });
        return res.json(unidadesmedidas);
    } catch (err) {
        logger.error('Error getUnidadesMedidas', err);
        res.status(500).json({ message: 'Error al obtener las Unidades de Medidas' });
    }
}

async function getUnidadesMedidasById(req, res){
    try {
        const id = req.params.id;
        const unidadmedida = await UnidadMedida.findByPk(id , {
            attributes: ['id', 'nombre_unidadmedida', 'updatedAt', 'createdAt'],            
        });
        logger.info('Obtenida Unidad de Medida', { unidadmedida });
        return res.json(unidadmedida);
    } catch (err) {
        logger.error('getUnidadesMedidasById Error al obtener Unidad de Medida', err);
        res.status(500).json({ message: 'getUnidadesMedidasById Error al obtener la Unidad de Medida' });
    }
}

async function createUnidadMedida(req, res) {
    try {
        const { nombre_unidadmedida } = req.body;
        const unidadesmedidas = await UnidadMedida.create({ nombre_unidadmedida });
        logger.info('Unidad Medida creada', { unidadesmedidas });
        return res.json(unidadesmedidas);
    } catch (err) {
        logger.error('Error al crear Unidad de Medida', err);
        res.status(500).json({ message: 'Error al crear la Unidad de Medida' });
    }
}

async function updateUnidadMedida(req, res) {
    const id = req.params.id;
    const { nombre_unidadmedida } = req.body;
    if(!nombre_unidadmedida) return res.status(400).json({ message: 'nombre_unidadmedidation es requerido' });
    try {
        const unidadmedida = await UnidadMedida.findByPk(id);
        if (!unidadmedida) { return res.status(404).json({ message: 'Unidad de Medida no encontrada' }); }
        unidadmedida.nombre_unidadmedida = nombre_unidadmedida;
        await unidadmedida.save();
        res.json(unidadmedida);
    } catch (err) {
        logger.error(`Error al actualizar Unidad Medida: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
}

async function deleteUnidadMedida(req, res) {
    const id = req.params.id;
    try {
        const unidadmedida = await UnidadMedida.findByPk(id);
        if (!unidadmedida) { return res.status(404).json({ message: 'Unidad de Medida no encontrada' }); }
        await unidadmedida.destroy();
        res.json({ message: 'Unidad de Medida eliminada' });
    } catch (err) {
        logger.error(`Error al eliminar Unidad Medida: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
 
}

export default {
    getUnidadesMedidas,
    createUnidadMedida,
    getUnidadesMedidasById,
    updateUnidadMedida,
    deleteUnidadMedida
};
