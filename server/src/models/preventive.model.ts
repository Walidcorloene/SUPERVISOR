import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { Equipement } from "./equipement.model";
import { User } from "./user.model";

export interface PreventiveInterface {
    id_preventive: number;
    outillage_documentation: string;
    anomalie_constatee_reparee: string;
    travaux_effectues: string;
    nom_technicien: string;
}

export class Preventive extends Model implements PreventiveInterface {
    id_preventive!: number;
    outillage_documentation!: string;
    anomalie_constatee_reparee!: string;
    travaux_effectues!: string;
    nom_technicien!: string;
    toJSON() {
        return { ...this.get(), id_preventive: undefined }
    };
}


Preventive.init(
    {
        id_preventive: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        outillage_documentation: {
            type: new DataTypes.TEXT,
            allowNull: false,
        },
        anomalie_constatee_reparee: {
            type: new DataTypes.TEXT,
            allowNull: false,
        },
        travaux_effectues: {
            type: new DataTypes.TEXT,
            allowNull: false,
        },
        nom_technicien: {
            type: new DataTypes.STRING(60),
            allowNull: false,
        }
    },
    {
        timestamps: false,
        tableName: "preventive",
        sequelize: database,
    }
);

User.hasMany(Preventive);
Preventive.belongsTo(User);

Equipement.hasMany(Preventive);
Preventive.belongsTo(Equipement);
