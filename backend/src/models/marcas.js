
import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Marca = sequelize.define('marcas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_marca: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "El nombre de la marca es obligatorio"
            },
            len: [3, 50]
        }
    }
});
