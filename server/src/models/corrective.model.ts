//import { Model, DataTypes } from "sequelize"
//import { database } from "../config/database";
//import { Creer } from "./creer.model";
//import { Equipement } from "./equipement.model";
//import { Ingenieur } from "./ingenieur.model";
//import { Notam } from "./notam.model";
//export interface CorrectiveInterface {
//
//    id_corrective: number;
//    anomalies_constatees: string;
//    ref_manip: string;
//    nom_technicien: string;
//}
//
//export class Corrective extends Model implements CorrectiveInterface {
//
//    id_corrective!: number;
//    anomalies_constatees!: string;
//    ref_manip!: string;
//    nom_technicien!: string;
//
//}
//
//Corrective.init(
//    {
//        id_corrective: {
//            type: DataTypes.INTEGER,
//            autoIncrement: true,
//            primaryKey: true,
//        },
//
//        anomalies_constatees: {
//            type: new DataTypes.TEXT,
//            allowNull: false,
//        },
//        ref_manip: {
//            type: new DataTypes.STRING(100),
//            allowNull: false,
//        },
//        nom_technicien: {
//            type: new DataTypes.STRING(60),
//            allowNull: false,
//        }
//    },
//    {
//        timestamps: false,
//        tableName: "corrective",
//        sequelize: database,
//    }
//);
//
//Equipement.hasMany(Corrective);
//Corrective.belongsTo(Equipement);
//
//
//
//
//
//
//Corrective.sync()
//    .then(() => console.log("Corrective table synchronized"))
//    .catch(err => console.log("Corrective Sync Error: ", err));
//