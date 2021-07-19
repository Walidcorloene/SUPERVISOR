import {database} from "../config/database"
import { Model,DataTypes } from "sequelize"


export interface EquipementInterface{
    equipment_machine: string;
    atelier: string;
    etat_station: string;
    R_restriction: string;
    pieces_remplaces: string;
    operations_effectuees: string;
}

export class Equipement extends Model{
    id_equipement!: number;
    equipment_machine!: string;
    atelier!: string;    
    etat_station!: string;
    R_restriction!: string;
    pieces_remplaces!: string;
    operations_effectuees!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Equipement.init(
    {
        id_equipement: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        
        equipment_machine: {
            type: new DataTypes.STRING(50),
            allowNull: false,
        },
        atelier: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        },
        etat_station: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        },
        R_restriction: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        pieces_remplaces:{
            type: new DataTypes.STRING(100),
            allowNull: false,
        },
        operations_effectuees:{
            type: new DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        tableName: "equipement",
        sequelize: database,
    }
);

Equipement.sync().then(() => console.log("Equipement table synchronized."));




