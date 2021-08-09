import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { User } from "./user.model";
import { Preventive } from "./preventive.model";

//Effectuer : lien entre Tache préventive et l'ingenieur => l'ingenieur effectue la tache préventive

export interface EffectuerInterface {
    PreventiveIdPreventive?: number | undefined;
    UserIdUser?: number | undefined;
    date_debut_intervention: Date;
    date_fin_intervention: Date;
}

export class Effectuer extends Model implements EffectuerInterface {
    PreventiveIdPreventive?: number | undefined;
    UserIdUser?: number | undefined;
    date_debut_intervention!: Date;
    date_fin_intervention!: Date;
    toJSON() {
        return { ...this.get(), id_responsable: undefined }
    };
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

User.belongsToMany(Preventive, { through: Effectuer });
Preventive.belongsToMany(User, { through: Effectuer });

