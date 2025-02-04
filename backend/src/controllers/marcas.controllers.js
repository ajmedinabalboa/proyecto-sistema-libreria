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

async function getMarcaById(req, res) {
    try {
        const id = req.params.id;
        const marca = await Marca.findByPk(id, {
            attributes: ['id', 'nombre_marca', 'updatedAt', 'createdAt'],
        });
        logger.info('Marca por Id', { marca });
        return res.json(marca);
    } catch (err) {
        logger.error('Error getMarcaById', err);
        res.status(500).json({ message: 'Error al obtener getMarcaById' });
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

async function updateMarca(req, res) {
    const id = req.params.id;
    const { nombre_marca } = req.body;
    if (!nombre_marca) return res.status(400).json({ message: 'nombre_marca es requerido' });
    try {
        const marca = await Marca.findByPk(id)
        if (!marca) { return res.status(404).json({ message: 'marca no encontrada' }); }
        marca.nombre_marca = nombre_marca;
        await marca.save();
        res.json(marca)

    } catch (error) {
        logger.error(`Error al actualizar marca: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
}

async function deleteMarca(req, res) {
    const id = req.params.id;
    try {
        const marca = await Marca.findByPk(id)
        if (!marca) { return res.status(404).json({ message: 'Marca no encontrada' }); }
        await marca.destroy();
        res.json({ message: 'Marca eliminada.' });

    } catch (error) {
        logger.error(`Error al eliminar marca: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
}

export default {
    getMarcas,
    createMarca,
    getMarcaById,
    updateMarca,
    deleteMarca,

};
