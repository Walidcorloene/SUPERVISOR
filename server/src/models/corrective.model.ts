import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { Equipement } from "./equipement.model";

export interface CorrectiveInterface {
    id_corrective: number;
    id_user: number;
    anomalies_constatees: string;
    ref_manip: string;
    nom_technicien: string;
    EquipementIdEquipement?: number | undefined;
}

export class Corrective extends Model implements CorrectiveInterface {
    id_corrective!: number;
    id_user!: number;
    anomalies_constatees!: string;
    ref_manip!: string;
    nom_technicien!: string;
    EquipementIdEquipement?: number | undefined;
    toJSON() {
        return { ...this.get(), id_corrective: undefined }
    };

    public async create(body: any) {
        const new_corrective = await Corrective.create<Corrective>(body)

        if (!new_corrective)
            false;
        return true;
    }
}

Corrective.init(
    {
        id_corrective: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
