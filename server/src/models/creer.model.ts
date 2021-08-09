import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { Corrective } from "./corrective.model";
import { User } from "./user.model";
//Creer: l'ingenieur crée une tache corrective

export interface CreerInterface {
    UserIdUser?: number | undefined;
    CorrectiveIdCorrective?: number | undefined;
    date_debut_intervention: Date;
    date_fin_intervention?: Date | undefined;
}

export class Creer extends Model implements CreerInterface {
    UserIdUser?: number | undefined;
    CorrectiveIdCorrective?: number | undefined;
    date_debut_intervention!: Date;
    date_fin_intervention?: Date | undefined;
    toJSON() {
        return { ...this.get(), id_responsable: undefined }
    };
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

Corrective.belongsToMany(User, { through: Creer });
User.belongsToMany(Corrective, { through: Creer });
