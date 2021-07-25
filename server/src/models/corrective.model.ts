import { Model } from "sequelize"

export interface CorrectiveInterface {
    id_corrective: number;
    id_equipement: number;
    anomalies_constatees: string;
    ref_manip: string;
    nom_technicien: string;
}

export class Corrective extends Model implements CorrectiveInterface {
    id_corrective!: number;
    id_equipement!: number;
    anomalies_constatees!: string;
    ref_manip!: string;
    nom_technicien!: string;

}
