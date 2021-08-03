import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { Corrective } from "./corrective.model";
import { Responsable } from "./responsable.model";

//Notam: Lorsque la tache corrective est effectuée
//une notification est envoyée au responsable pour créer un Notam

export interface NotamInterface {
    id_notam: number;
    installation: string;
    cause: string;
    objetNotam: string;
    autre: string;
}

export class Notam extends Model implements NotamInterface {
    id_notam!: number;
    installation!: string;
    cause!: string;
    objetNotam!: string;
    autre!: string;
    toJSON() {
        return { ...this.get(), id_responsable: undefined }
    };
}

Notam.init(
    {
        id_notam: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        dateDebut: {
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        dateFin: {
            type: new DataTypes.DATE,
            allowNull: true
        },
        installation: {
            type: new DataTypes.STRING(100),
            allowNull: false,
        },
        cause: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },

        objetNotam: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        contenu: {
            type: new DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        timestamps: false,
        tableName: "notam",
        sequelize: database,
    }
);

Corrective.hasMany(Notam);
Notam.belongsTo(Corrective);

Responsable.hasMany(Notam);
Notam.belongsTo(Responsable);
