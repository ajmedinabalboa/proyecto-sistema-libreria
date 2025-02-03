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

export default {
    getUnidadesMedidas,
    createUnidadMedida
};
