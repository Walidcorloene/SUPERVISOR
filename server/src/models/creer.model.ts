import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { Corrective } from "./corrective.model";
import { Ingenieur } from "./ingenieur.model";
//Creer: l'ingenieur crée une tache corrective

export interface CreerInterface {
    IngenieurIdIngenieur: number;
    date_debut_intervention: Date;
    date_fin_intervention: Date;
}

export class Creer extends Model implements CreerInterface {
    IngenieurIdIngenieur!: number;
    date_debut_intervention!: Date;
    date_fin_intervention!: Date;
}

Creer.init({
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
        tableName: "creer",
        sequelize: database,
    }
);

Corrective.belongsToMany(Ingenieur, { through: Creer });
Ingenieur.belongsToMany(Corrective, { through: Creer });

Creer.sync()
    .then(() => console.log("Creer table synchronized"))
    .catch(err => console.log("Creer Sync Error: ", err));

