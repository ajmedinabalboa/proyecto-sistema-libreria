import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Proveedor = sequelize.define('proveedores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_proveedor: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "El nombre del Proveedor es obligatorio"
            },
            len: [3, 150]
        }
    }
});