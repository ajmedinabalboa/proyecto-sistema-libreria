import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Categoria = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "El nombre de la categoria es obligatorio"
            },
            len: [3, 50]
        }
    },
    descripcion_categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "Debe tener su descripcion"
            },
            len: [3, 50]
        }
    }
});



