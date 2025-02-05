import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

import { Categoria } from "./categorias.js";
import { Marca } from "./marcas.js";
import { UnidadMedida } from "./unidadesmedidas.js";
import { Proveedor } from "./proveedores.js";

export const Material = sequelize.define('materiales', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_material: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El nombre del material es obligatorio'
            },
            len: [2, 250]
        }
    },
    descripcion_material: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    precio_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
        validate: {
            notNull: {
                msg: 'El precio unitario es obligatorio'
            },
            min: 0
        }
    },
    stock_actual: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    stock_minimo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 5
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

Categoria.hasMany(Material, { foreignKey: 'id_categoria' });
Material.belongsTo(Categoria, { foreignKey: 'id_categoria', as: 'categoria' });

Marca.hasMany(Material, { foreignKey: 'id_marca' });
Material.belongsTo(Marca, { foreignKey: 'id_marca', as: 'marca' });

UnidadMedida.hasMany(Material, { foreignKey: 'id_unidadmedida' });
Material.belongsTo(UnidadMedida, { foreignKey: 'id_unidadmedida', as:'unidadmedida' });

Proveedor.hasMany(Material, { foreignKey: 'id_proveedor' });
Material.belongsTo(Proveedor, { foreignKey: 'id_proveedor', as: 'proveedor' });
