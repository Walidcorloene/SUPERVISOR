import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";


export interface IngenieurInterface {
    id_ingenieur: number;
    name: string;
    surname: string;
    login: string;
    password: string;
    email: string;
}

export  class Ingenieur extends Model implements IngenieurInterface {
    id_ingenieur!: number;
    name!: string;
    surname!: string;
    login!: string;
    password!: string;
    email!: string;
}

Ingenieur.init(
    {
        id_ingenieur: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(30),
            allowNull: false,
        },
        surname: {
            type: new DataTypes.STRING(30),
            allowNull: false,
        },
        login:{
            type: new DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
      
    },
    {
        timestamps: false,
        tableName: "ingenieur",
        sequelize: database,
    }
);



Ingenieur.sync()
    .then(() => console.log("Ingenieur table synchronized"))
    .catch(err => console.log("Ingenieur Sync Error: ", err));

