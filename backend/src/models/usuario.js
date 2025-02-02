import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Rol } from "./Rol.js";

export const Usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "El nombre es obligatorio" },
            len: [3, 50]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: { msg: "Debe ser un correo válido" }
        }
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "La contraseña es obligatoria" },
            len: [6, 100]
        }
    },
});

Usuario.belongsTo(Rol, { foreignKey: "rolId", as: "rol" });
Rol.hasMany(Usuario, { foreignKey: "rolId" });