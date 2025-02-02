import app from "./app.js";
import 'dotenv/config';
import logger from "./logs/logger.js";
import sequelize from "./database/database.js";
const { seedRoles } = await import("./database/seeders/seedRoles.mjs");


async function main() {
    await sequelize.sync ({ force: false }).then(() => {
        console.log("Base de datos sincronizada");
        seedRoles(); // Llamamos la función para insertar los roles
    });
    const port = process.env.PORT;
    app.listen(port);
    logger.info(`Server is running on port ${port}`);
}

main();