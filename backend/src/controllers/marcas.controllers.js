import logger from '../logs/logger.js';
import { Marca } from '../models/marcas.js';
async function getMarcas(req, res) {
    try {
        const marcas = await Marca.findAll({
            attributes: ['id', 'nombre_marca'],
            order: [['id', 'ASC']]
        });
        logger.info('Obtenida lista de marcas', { marcas });
        return res.json(marcas);
    } catch (err) {
        logger.error('Error getMarcas', err);
        res.status(500).json({ message: 'Error al obtener las marcas' });
    }

}

async function createMarca(req, res) {
    try {
        const { nombre_marca } = req.body;
        const marca = await Marca.create({ nombre_marca });
        logger.info('Marca creada', { marca });
        return res.json(marca);
    } catch (err) {
        logger.error('Error al crear Marca', err);
        res.status(500).json({ message: 'Error al crear la marca' });
    }
}

export default {
    getMarcas,
    createMarca
};
