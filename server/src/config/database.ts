import { Sequelize } from 'sequelize';

export const database = new Sequelize("supervisor", "lina","lina", {
    host: "localhost",
    dialect: "postgres",
    port: 5432
});