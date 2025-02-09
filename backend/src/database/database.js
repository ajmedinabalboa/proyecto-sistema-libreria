import { Sequelize } from "sequelize";
import 'dotenv/config'
// Create a new Sequelize instance with your database credentials
const sequelize = new Sequelize(
    process.env.DB_DATABASE, //db name
    process.env.DB_USER, //user name
    process.env.DB_PASSWORD, //password
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DB_DIALECT,
        port: process.env.DB_DB_PORT,
        logging: console.log, // Enable logging if you want
    }
);

export default sequelize;