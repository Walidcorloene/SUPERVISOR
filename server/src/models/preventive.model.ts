import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { Equipement } from "./equipement.model";
import { Responsable } from "./responsable.model";

export interface PreventiveInterface {
    id_preventive:number;
    outillage_documentation: string;
    anomalie_constatee_reparee: string;
    travaux_effectues: string;
    nom_technicien: string;
}

export class Preventive extends Model implements PreventiveInterface {
    id_preventive!:number;
    outillage_documentation!: string;
    anomalie_constatee_reparee!: string;
    travaux_effectues!: string;
    nom_technicien!: string;
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

Responsable.hasMany(Preventive);
Preventive.belongsTo(Responsable);

Equipement.hasMany(Preventive);
Preventive.belongsTo(Equipement);

Preventive.sync()
    .then(() => console.log("Preventive table synchronized"))
    .catch(err => console.log("Preventive Sync Error: ", err));

