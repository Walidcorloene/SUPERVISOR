import {database} from "../config/database"
import { Model,DataTypes } from "sequelize"

export interface CorrectiveInterface{
    anomalies_constatees: string;
    ref_manip: string;
    nom_technicien: string;
}

export class Corrective extends Model{
    id_corrective!: number;
    fk_equipement_id!: number;
    anomalies_constatees!: string;
    ref_manip!: string;    
    nom_technicien!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Corrective.init(
    {
        id_corrective: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fk_equipement_id: {
            type: new DataTypes.INTEGER,
            allowNull: false,
            references: { model: "Equipement", key: "id_equipement" },
        },
        
        anomalies_constatees: {
            type: new DataTypes.TEXT,
            allowNull: false,
        },
        ref_manip: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        nom_technicien: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        }
    },
    {
        tableName: "corrective",
        sequelize: database,
    }
);

async () => {
    await Corrective.sync()
        .then(() => console.log("Corrective table synchronized"))
        .catch(err => console.log("Corrective Sync Error: ", err));
}