import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";

export interface ResponsableInterface {
    id_responsable: number;
    email: string;
    name: string;
    surname: string;
    login: string;
    password: string;
}

export class Responsable extends Model implements ResponsableInterface {
    id_responsable!: number;
    email!: string; //null
    name!: string; //? not null
    surname!: string;
    login!: string;
    password!: string;
}


Responsable.init(
    {
        id_responsable: {
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
        login: {
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
        tableName: "responsable",
        sequelize: database,
    }
);

Responsable.sync()
    .then(() => console.log("Responsable. table synchronized"))
    .catch(err => console.log("Responsable. Sync Error: ", err));



