import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";

export interface EquipementInterface {
    id_equipement: number;
    equipement_machine: string;
    atelier: string;
    etat_station: string;
    R_restriction: string;
    pieces_remplaces: string;
}

export class Equipement extends Model implements EquipementInterface {
    id_equipement!: number;
    equipement_machine!: string;
    atelier!: string;
    etat_station!: string;
    R_restriction!: string;
    pieces_remplaces!: string;
    toJSON() {
        return { ...this.get(), id_equipement: undefined }
    };
}

Equipement.init(
    {
        id_equipement: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        equipement_machine: {
            type: new DataTypes.STRING(150),
            allowNull: false,
        },
        atelier: {
            type: new DataTypes.STRING(150),
            allowNull: false,
        },
        etat_station: {
            type: new DataTypes.ENUM("sans_restriction", "avec_restriction", "inutilisable"),
            allowNull:false
        },
        R_restriction: {
            type: new DataTypes.STRING(30),
            allowNull: false,
        },
        pieces_remplaces: {
            type: new DataTypes.STRING(100),
            allowNull: false,
        }
    },
    {
        timestamps: false,
        tableName: "equipement",
        sequelize: database,
    }
);
