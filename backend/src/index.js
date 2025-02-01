import app from "./app.js";
import 'dotenv/config';
import logger from "./logs/logger.js";
import sequelize from "./database/database.js";

async function main() {
    await sequelize.sync();
    const port = process.env.PORT;
    app.listen(port);
    logger.info(`Server is running on port ${port}`);
}

main();