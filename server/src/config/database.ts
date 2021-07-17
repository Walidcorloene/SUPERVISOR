import { Sequelize } from 'sequelize';
console.log("gg");
export const database = new Sequelize('supervisor', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});