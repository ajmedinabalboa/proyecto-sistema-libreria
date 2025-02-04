import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

export const Rol = sequelize.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.ENUM("Administrador", "Ventas", "Almacen"),
    allowNull: false,
    unique: true,
  },
});

