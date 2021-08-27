import { Sequelize } from "sequelize";
import dotenv from "dotenv"
const process = require('process');
dotenv.config()
export const database = new Sequelize(process.env.DB_NAME, process.env.DB_HOSTNAME, process.env.DB_PASSWORD, {
  dialect: process.env.DB_DIALECT
})

