import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { Corrective } from "./corrective.model";
import { Ingenieur } from "./ingenieur.model";
//Creer: l'ingenieur crée une tache corrective

export interface CreerInterface {

    date_debut_intervention: Date;
    date_fin_intervention: Date;
}

export class Creer extends Model implements CreerInterface {
    date_debut_intervention!: Date;
    date_fin_intervention!: Date;
}

Creer.init(
    {

        date_debut_intervention: {
            type: new DataTypes.DATE,
            allowNull: false,
        },
        date_fin_intervention: {
            type: new DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "creer",
        sequelize: database,
    }
);

Corrective.belongsToMany(Ingenieur, { through: Creer });
Ingenieur.belongsToMany(Corrective, { through: Creer });



Creer.sync()
    .then(() => console.log("Creer table synchronized"))
    .catch(err => console.log("Creer Sync Error: ", err));

