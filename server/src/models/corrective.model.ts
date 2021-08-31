import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { Equipement } from "./equipement.model";

export interface CorrectiveInterface {
    id_corrective: number;
    id_user:number;
    anomalies_constatees: string;
    ref_manip: string;
    nom_technicien: string;
    travaux_effectues:string;
    EquipementIdEquipement?: number | undefined;
    date_debut_intervention:Date;
    date_fin_intervention:Date;
}

export class Corrective extends Model implements CorrectiveInterface {
    id_corrective!: number;
    id_user!:number;
    anomalies_constatees!: string;
    ref_manip!: string;
    nom_technicien!: string;
    travaux_effectues!:string;
    EquipementIdEquipement?: number | undefined;
    date_debut_intervention!:Date;
    date_fin_intervention!:Date;
    
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
            references: {
                model: 'user',
                key: 'id_user',
              },
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
        },
        travaux_effectues: {
            type: new DataTypes.TEXT,
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
        tableName: "corrective",
        sequelize: database,
    }
);

Equipement.hasMany(Corrective);
Corrective.belongsTo(Equipement);
