import {Sequelize} from "sequelize";

export const database = new Sequelize('supervisor', 'root', '', {
  dialect: 'mysql'
})

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

