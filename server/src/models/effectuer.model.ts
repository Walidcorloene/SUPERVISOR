import { Model, DataTypes } from "sequelize"

//Effectuer : lien entre Tache préventive et l'ingenieur => l'ingenieur effectue la tache préventive

export interface EffectuerInterface {
    fk_ingenieur_id: number;
    fk_preventive_id: number;
    date_debut_intervention: Date;
    date_fin_intervention: Date;
}

export class Effectuer extends Model implements EffectuerInterface{
    fk_ingenieur_id!: number;
    fk_preventive_id!: number;
    date_debut_intervention!: Date;
    date_fin_intervention!: Date;
}
