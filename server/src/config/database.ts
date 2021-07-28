import { Sequelize } from "sequelize";

const database = new Sequelize('supervisor', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
})

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = database