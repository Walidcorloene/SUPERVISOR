import {Sequelize} from "sequelize";

export const database = new Sequelize('supervisor', 'root', '', {
  dialect: 'mysql'
})

