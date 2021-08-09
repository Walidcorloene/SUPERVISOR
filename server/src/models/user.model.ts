import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";


export interface UserInterface {
    id_user: number;
    name: string;
    surname: string;
    login: string;
    password: string;
    email: string;
    role: string;
    resetPasswordToken?: string | undefined;

}

export class User extends Model implements UserInterface {
    id_user!: number;
    name!: string;
    surname!: string;
    login!: string;
    password!: string;
    email!: string;
    role!: string;
    resetPasswordToken?: string | undefined;

    toJSON() {
        return { ...this.get(), id_user: undefined }
    };
}

User.init(
    {
        id_user: {
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
            unique: true,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM("ingenieur", "responsable"),
            allowNull: false
        },
        resetPasswordToken: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false,
        tableName: "user",
        sequelize: database,
    }
);

