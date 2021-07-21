import { database } from "../config/database"
import { Model, DataTypes } from "sequelize"

export interface PreventiveInterface {
    outillage_documentation: string;
    anomalie_constatee_reparee: string;
    travaux_effectues: string;
    nom_technicien: string;
}

export class Preventive extends Model {
    id_preventive!: number;
    fk_responsable_id!: number;
    fk_equipement_id!: number;
    outillage_documentation!: string;
    anomalie_constatee_reparee!: string;
    travaux_effectues!: string;
    nom_technicien!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Preventive.init(
    {
        id_preventive: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fk_responsable_id: {
            type: new DataTypes.INTEGER,
            allowNull: false,
            references: { model: "Responsable", key: "id_responsable" },
        },
        fk_equipement_id: {
            type: new DataTypes.INTEGER,
            allowNull: false,
            references: { model: "Equipement", key: "id_equipement" },
        },
        outillage_documentation: {
            type: new DataTypes.TEXT,
            allowNull: false,
        },
        naanomalie_constatee_repareeme: {
            type: new DataTypes.TEXT,
            allowNull: false,
        },
        travaux_effectues: {
            type: new DataTypes.TEXT,
            allowNull: false,
        },
        nom_technicien: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        }
    },
    {
        tableName: "preventive",
        sequelize: database,
    }
);

async () => {
    await Preventive.sync()
        .then(() => console.log("Preventive table synchronized"))
        .catch(err => console.log("Preventive Sync Error: ", err));
}