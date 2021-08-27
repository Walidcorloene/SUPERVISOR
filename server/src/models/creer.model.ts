import { Model, DataTypes } from "sequelize"
import { database } from "../config/database";
import { Corrective } from "./corrective.model";
import { User } from "./user.model";
//Creer: l'ingenieur crée une tache corrective

export interface CreerInterface {
    UserIdUser: number;
    CorrectiveIdCorrective: number;
}

export class Creer extends Model implements CreerInterface {
    UserIdUser!: number;
    CorrectiveIdCorrective!: number;
    toJSON() {
        return { ...this.get(), id_responsable: undefined }
    };
}

Creer.init({

},
    {
        timestamps: false,
        tableName: "creer",
        sequelize: database,
    }
);

Corrective.belongsToMany(User, { through: Creer });
User.belongsToMany(Corrective, { through: Creer });
