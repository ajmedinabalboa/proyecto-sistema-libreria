import app from "./app.js";
import 'dotenv/config';
import logger from "./logs/logger.js";
import sequelize from "./database/database.js";

// Importar los modelos para asegurarnos de que se cargan
import { Usuario } from "./models/usuarios.js";
import { Rol } from "./models/roles.js";

// Definir las relaciones después de importar los modelos
Rol.hasMany(Usuario, { foreignKey: "rolId" });
Usuario.belongsTo(Rol, { foreignKey: "rolId" });

// Importar los seeders
const { add_marcas } = await import("./database/seeders/add_marcas.mjs");
const { add_proveedores } = await import("./database/seeders/add_proveedores.mjs");
const { seedRoles } = await import("./database/seeders/add_roles.mjs");
const { add_usuarios } = await import("./database/seeders/add_usuarios.mjs");
const { add_unidadesmedidas } = await import("./database/seeders/add_unidadesmedidas.mjs");

async function main() {
    try {
        await sequelize.sync({ force: true });
        console.log("Base de datos sincronizada");

        // Ejecutar seeders en el orden correcto
        await seedRoles(); // Insertar roles primero (para evitar problemas con rolId)
        await add_marcas();
        await add_proveedores();
        await add_usuarios();  // Usuarios después de que existan los roles
        await add_unidadesmedidas();

        const port = process.env.PORT;
        app.listen(port, () => {
            logger.info(`Server is running on port ${port}`);
        });

    } catch (err) {
        console.error("Error al sincronizar la base de datos:", err);
    }
}

main();
