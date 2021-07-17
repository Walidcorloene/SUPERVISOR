import { Sequelize } from 'sequelize';

export const database = new Sequelize('supervisor', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});