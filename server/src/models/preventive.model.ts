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
    EquipementIdEquipement?: number | undefined;
    UserIdUser?: number | undefined;
    date_debut_intervention:Date;
    date_fin_intervention:Date;
}

export class Preventive extends Model implements PreventiveInterface {
    id_preventive!: number;
    outillage_documentation!: string;
    anomalie_constatee_reparee!: string;
    travaux_effectues!: string;
    nom_technicien!: string;
    EquipementIdEquipement?: number | undefined;
    UserIdUser?: number | undefined;
    date_debut_intervention!:Date;
    date_fin_intervention!:Date;
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
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        },
        date_debut_intervention: {
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        date_fin_intervention: {
            type: new DataTypes.DATE,
            allowNull: true
        },
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
