import app from "./app.js";
import 'dotenv/config';
import logger from "./logs/logger.js";
import sequelize from "./database/database.js";


const { seedRoles } = await import("./database/seeders/add_roles.mjs");
const { add_usuarios } = await import("./database/seeders/add_usuarios.mjs");
const { add_categorias } = await import("./database/seeders/add_categorias.mjs");
const { add_marcas } = await import("./database/seeders/add_marcas.mjs");
const { add_unidadesmedidas } = await import("./database/seeders/add_unidadesmedidas.mjs");
const { add_proveedores } = await import("./database/seeders/add_proveedores.mjs");
const { add_materiales } = await import("./database/seeders/add_materiales.mjs");


async function main() {
    await sequelize.sync({ force: false }).then(() => {
        console.log("Base de datos sincronizada");
        seedRoles(); // Llamamos la función para insertar los roles
        add_usuarios(); // Llamamos la función para insertar los usuarios
        add_categorias(); // Llamamos la función para insertar las Categorías  (Ej: Libros, Revistas, etc.)  // Llamamos la función para insertar las marcas
        add_marcas(); // Llamamos la función para insertar las marcas
        add_unidadesmedidas(); // Llamamos la función para insertar las Unidadesde Medidas
        add_proveedores(); // Llamamos la función para insertar los proveedores
        add_materiales(); // Llamamos la función para insertar Materiales
    });
    const port = process.env.PORT;
    app.listen(port);
    logger.info(`Server is running on port ${port}`);
}

main();