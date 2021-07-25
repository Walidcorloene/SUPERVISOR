import { Model, DataTypes } from "sequelize"

//Creer: l'ingenieur crée une tache corrective

export interface CreerInterface {
    fk_ingenieur_id: number;
    id_corrective: number;
    date_debut_intervention: Date;
    date_fin_intervention: Date;
}

export class Creer extends Model implements CreerInterface {
    fk_ingenieur_id!: number;
    id_corrective!: number;
    date_debut_intervention!: Date;
    date_fin_intervention!: Date;
}
