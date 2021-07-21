import { Model, DataTypes, IntegerDataType } from "sequelize";
import { database } from "../config/database";

export interface IngenieurInterface {
    email: string;
    name: string;
    surname: string;
    login: string;
    password: string;
}

export class Ingenieur extends Model {
    id_ingenieur!: number;
    email!: string;
    name!: string;
    surname!: string;
    login!: string;
    password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Ingenieur.init(
    {
        id_ingenieur: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        name: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        surname: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        login: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        }
    },
    {
        tableName: "ingenieur",
        sequelize: database,
    }
);
console.log(Ingenieur === database.models.ingenieur)
console.log(Ingenieur)
console.log(database.models.ingenieur)

const async_ingenieur = async () => {
    await Ingenieur.sync()
        .then(() => console.log("Preventive table synchronized"))
        .catch(err => console.log("Preventive Sync Error: ", err));
}