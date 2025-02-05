import logger from '../logs/logger.js';
import { Categoria } from '../models/categorias.js';

async function getCategorias(req, res) {
    try {
        const categorias = await Categoria.findAll({
            attributes: ['id', 'nombre_categoria', 'descripcion_categoria'],
            order: [['id', 'DESC']],

        });
        return res.json(categorias);
    } catch (error) {
        logger.error('Error getCateroria', + error);
        res.status(500).json({ message: 'server error' });
    }

}

async function createCategoria(req, res) {
    try {
        const { nombre_categoria, descripcion_categoria } = req.body;
        const categorias = await Categoria.create({ nombre_categoria, descripcion_categoria });
        res.json(categorias);
    } catch (error) {
        logger.error('Error createCategoria: ', + error);
        res.status(500).json({ message: 'Server error' });
    }
}

export default {
    getCategorias,
    createCategoria,
};
