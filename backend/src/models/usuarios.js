<<<<<<< HEAD:backend/src/models/usuario.js
    import { DataTypes } from "sequelize";
    import sequelize from "../database/database.js";
    import { Rol } from "./Rol.js";
=======
import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Rol } from "./roles.js";
>>>>>>> a2acded5c95b7c1079d68ebb9da7a9f5ded89671:backend/src/models/usuarios.js

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

        rolId: {  // Clave foránea correcta
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Rol,
                key: "id"
            }
        }
    });

    //Usuario.belongsTo(Rol, { foreignKey: "rolId", as: "rol" });
    //Rol.hasMany(Usuario, { foreignKey: "rolId" });

    // Relación Uno a Muchos: Un Rol tiene muchos Usuarios
Rol.hasMany(Usuario, {
    foreignKey: 'rolId', // Clave foránea corregida
    sourceKey: 'id'
});

// Relación inversa: Un Usuario pertenece a un Rol
Usuario.belongsTo(Rol, {
    foreignKey: 'rolId', // Clave foránea corregida
    targetKey: 'id'
});