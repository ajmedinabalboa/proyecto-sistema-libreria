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

async function getCategoriaById(req, res) {
    try {
        const id = req.params.id;
        const categoria = await Categoria.findByPk(id,
            {
                attributes: ['id', 'nombre_categoria', 'descripcion_categoria', 'updatedAt', 'createdAt'],

            });
        logger.info('Categoriaa por Id', { categoria });
        return res.json(categoria);
    } catch (error) {
        logger.error('Error getCateroriaById', + error);
        res.status(500).json({ message: 'Error al obtener getCategoriaById' });
    }

}

async function updateCategoria(req, res) {
    const id = req.params.id;
    let { nombre_categoria, descripcion_categoria } = req.body;
    try {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) { return res.status(404).json({ message: 'categoria no encontrada' }); }
        if (!nombre_categoria) nombre_categoria = categoria.nombre_categoria;
        if (!descripcion_categoria) descripcion_categoria = categoria.descripcion_categoria;
        categoria.nombre_categoria = nombre_categoria;
        categoria.descripcion_categoria = descripcion_categoria;
        await categoria.save();
        res.json(categoria)
    } catch (error) {
        logger.error('Error al actualizar categoria:', error);
        res.status(500).json({ message: 'Error al actualizar catergoria' + error.message });
    }

}

async function deleteCategoria(req, res) {
    const id = req.params.id;
    try {
        const categoria = await Categoria.findByPk(id)
        if (!categoria) { return res.status(404).json({ message: 'Categoria no encontrada' }); }
        await categoria.destroy();
        res.json({ message: 'Categoria eliminada.' });

    } catch (error) {
        logger.error(`Error al eliminar categoria: ${error.message}`);
        res.status(500).json({ message: 'Server error: Error al eliminar categoria' });
    }
}

export default {
    getCategorias,
    createCategoria,
    getCategoriaById,
    updateCategoria,
    deleteCategoria,
};
