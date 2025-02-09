
import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const UnidadMedida = sequelize.define('unidadesmedidas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_unidadmedida: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "El nombre de la Unidad Medida es obligatorio"
            },
            len: [3, 50]
        }
    }
});
