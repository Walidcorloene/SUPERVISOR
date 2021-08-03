import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { Equipement } from "./equipement.model";

export interface CorrectiveInterface {

    id_corrective: number;
    anomalies_constatees: string;
    ref_manip: string;
    nom_technicien: string;
}

export class Corrective extends Model implements CorrectiveInterface {

    id_corrective!: number;
    anomalies_constatees!: string;
    ref_manip!: string;
    nom_technicien!: string;
    toJSON() {
        return { ...this.get(), id_responsable: undefined }
    };

}

Corrective.init(
    {
        id_corrective: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        anomalies_constatees: {
            type: new DataTypes.TEXT,
            allowNull: false,
        },
        ref_manip: {
            type: new DataTypes.STRING(100),
            allowNull: false,
        },
        nom_technicien: {
            type: new DataTypes.STRING(60),
            allowNull: false,
        }
    },
    {
        timestamps: false,
        tableName: "corrective",
        sequelize: database,
    }
);

Equipement.hasMany(Corrective);
Corrective.belongsTo(Equipement);
