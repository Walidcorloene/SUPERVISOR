import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { Ingenieur } from "./ingenieur.model";
import { Preventive } from "./preventive.model";

//Effectuer : lien entre Tache préventive et l'ingenieur => l'ingenieur effectue la tache préventive

export interface EffectuerInterface {
    PreventiveIdPreventive:number;
    IngenieurIdIngenieur:number;
    date_debut_intervention: Date;
    date_fin_intervention: Date;
}

export class Effectuer extends Model implements EffectuerInterface {
    PreventiveIdPreventive!:number;
    IngenieurIdIngenieur!:number;
    date_debut_intervention!: Date;
    date_fin_intervention!: Date;
}

Effectuer.init(
    {
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
        tableName: "effectuer",
        sequelize: database,
    }
);

Ingenieur.belongsToMany(Preventive, { through: Effectuer});
Preventive.belongsToMany(Ingenieur, { through: Effectuer});


Effectuer.sync()
    .then(() => console.log("Effectuer table synchronized"))
    .catch(err => console.log("Effectuer Sync Error: ", err));

