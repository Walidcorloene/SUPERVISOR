import {database} from "../config/database"
import { Model,DataTypes } from "sequelize"


export interface ResponsableInterface{
    email: string;
    name: string;
    surname: string;
    login: string;
    password: string;
}

export class Responsable extends Model{
    id_responsable!: number;    
    fk_preventive_id!: number;
    email!: string;
    name!: string;
    surname!: string;
    login!: string;
    password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Responsable.init(
    {
        id_responsable: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fk_preventive_id: {
            type: new DataTypes.INTEGER,
            allowNull: false,
            references: { model: "preventive", key: "id_preventive" },
        },
        email: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        nom: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        prenom: {
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

Responsable.sync().then(() => console.log("responsable table synchronized."));




