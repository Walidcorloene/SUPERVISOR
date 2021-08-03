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
    name!: string; //? not null
    surname!: string;
    login!: string;
    email!: string; //null
    password!: string;

    toJSON() {
        return { ...this.get(), id_responsable: undefined }
    };
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
            type: new DataTypes.STRING(255),
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



