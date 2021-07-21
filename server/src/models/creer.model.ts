import {database} from "../config/database"
import { Model,DataTypes } from "sequelize"

//Creer: l'ingenieur crée une tache corrective

export interface CreerInterface{
    fk_ingenieur_id: number;
    fk_corrective_id: number;
    date_debut_intervention: Date;
    date_fin_intervention: Date;

}

export class Creer extends Model{
    fk_ingenieur_id!: number;
    fk_corrective_id!: number;
    date_debut_intervention!: Date;
    date_fin_intervention!: Date;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Creer.init(
    {
        fk_ingenieur_id: {
            type: new DataTypes.INTEGER,
            allowNull: false,
           // primaryKey: true,
            references: { model: "Ingenieur", key: "id_ingenieur" },
        },
        fk_corrective_id: {
            type: new DataTypes.INTEGER,
            allowNull: false,
           // primaryKey: true,
            references: { model: "Corrective", key: "id_corrective" },
        },
        date_debut_intervention: {
            type: new DataTypes.DATE,
            allowNull: false,
        },
        date_fin_intervention: {
            type: new DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        tableName: "creer",
        sequelize: database,
    }
);

async () => {
    await Creer.sync()
        .then(() => console.log("Creer table synchronized"))
        .catch(err => console.log("Creer Sync Error: ", err));
}