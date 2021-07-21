import { database } from "../config/database"
import { Model, DataTypes } from "sequelize"

export interface ResponsableInterface {
    email: string;
    name: string;
    surname: string;
    login: string;
    password: string;
}

export class Responsable extends Model {
    id_responsable!: number;
    email!: string;
    name!: string;
    surname!: string;
    login!: string;
    password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}
//u u unsigned unique : id random a tester
Responsable.init(
    {
        id_responsable: {
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
            type: new DataTypes.STRING(20),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        }
    },
    {
        tableName: "responsable",
        sequelize: database,
    }
);

async () => {
    await Responsable.sync()
        .then(() => console.log("Responsable table synchronized"))
        .catch(err => console.log("Responsable Sync Error: ", err));
}