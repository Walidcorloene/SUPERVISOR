import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";

export interface UserInterface {
    email: string;
    name: string;
    surname: string;
    login: string;
    password: string;
}

export class User extends Model {
    public id!: number;
    public email!: string;
    public name!: string;
    public surname!: string;
    public login!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
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
            allowNull: true,
        },
        surname: {
            type: new DataTypes.STRING(50),
            allowNull: true,
        },
        login: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        }
    },
    {
        tableName: "user",
        sequelize: database,
    }
);

User.sync().then(() => console.log("User table created"));