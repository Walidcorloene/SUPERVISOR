import {database} from "../config/database"
import { Model,DataTypes } from "sequelize"


export interface NotamInterface{
    fk_responsable_id: number;
    fk_corrective_id: number;
    dateN: Date;
    contenu: string;
}

export class Notam extends Model{
    id_notam!:number
    fk_responsable_id!: number;
    fk_corrective_id!: number;    
    dateN!: Date;
    objet!: string;
    contenu!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Notam.init(
    {
        id_notam: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fk_responsable_id: {
            type: new DataTypes.INTEGER,
            allowNull: false,
            references: { model: "responsable", key: "id_responsable" },
        },
        fk_corrective_id: {
            type: new DataTypes.INTEGER,
            allowNull: false,
            references: { model: "corrective", key: "id_corrective" },
        },
        dateN: {
            type: new DataTypes.DATE,
            allowNull: false,
        },
        objet: {
            type: new DataTypes.TEXT,
            allowNull: false,
        },
        contenu: {
            type: new DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        tableName: "notam",
        sequelize: database,
    }
);

Notam.sync().then(() => console.log("Notam table synchronized."));




