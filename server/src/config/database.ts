<<<<<<< HEAD
import {Sequelize} from "sequelize";

export const database = new Sequelize('supervisor', 'root', '', {
  dialect: 'mysql'
})
=======
const mysql = require("mysql");
const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "supervisor",
});

module.exports = database;
>>>>>>> 97a092884e93c7bdef95037aa41cd02671a402a0
