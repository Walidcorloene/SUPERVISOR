import { Model} from "sequelize"

export interface PreventiveInterface {
    outillage_documentation: string;
    anomalie_constatee_reparee: string;
    travaux_effectues: string;
    nom_technicien: string;
}

export class Preventive extends Model implements PreventiveInterface {
    id_preventive!: number;
    fk_responsable_id!: number;
    fk_equipement_id!: number;
    outillage_documentation!: string;
    anomalie_constatee_reparee!: string;
    travaux_effectues!: string;
    nom_technicien!: string;
}