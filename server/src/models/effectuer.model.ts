import { database } from "../config/database"
import { Model, DataTypes } from "sequelize"

//Effectuer : lien entre Tache préventive et l'ingenieur => l'ingenieur effectue la tache préventive

export interface EffectuerInterface {
    fk_ingenieur_id: number;
    fk_preventive_id: number;
    date_debut_intervention: Date;
    date_fin_intervention: Date;
}

export class Effectuer extends Model {
    fk_ingenieur_id!: number;
    fk_preventive_id!: number;
    date_debut_intervention!: Date;
    date_fin_intervention!: Date;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Effectuer.init(
    {
        fk_ingenieur_id: {
            type: new DataTypes.INTEGER,
            allowNull: false,
            //  primaryKey: true,
            references: { model: "Ingenieur", key: "id_ingenieur" },
        },
        fk_preventive_id: {
            type: new DataTypes.INTEGER,
            allowNull: false,
            //primaryKey: true,
            references: { model: "Preventive", key: "id_preventive" },
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
        tableName: "effectuer",
        sequelize: database,
    }
);

async () => {
    await Effectuer.sync()
        .then(() => console.log("Effectuer table synchronized"))
        .catch(err => console.log("Effectuer Sync Error: ", err));
}