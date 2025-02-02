import logger from '../logs/logger.js';
import { Categorias } from '../models/categorias.js';

async function getCat(req, res) {
    try {
        const categorias = await Categorias.findAll({
            attributes: ['id', 'nombre_categoria', 'descripcion_categoria'], 
            order: [['id', 'DESC']],
       
        });
        return res.json(categorias);
    } catch (error) {
        logger.error('Error getCat', + error);
        res.status(500).json({message: 'server error'});
    }
   
}

async function createCat(req, res) {
    try {
        const {nombre_categoria, descripcion_categoria } = req.body;
        const user = await Usuario. create({ nombre_categoria, descripcion_categoria });
        res.json(categorias);
    } catch (error) {
        logger.error('Error createCat: ', + error);
        res.status(500).json({message: 'Server error'});  
    }
}

export default {
    getCat,
    createCat,
 };
