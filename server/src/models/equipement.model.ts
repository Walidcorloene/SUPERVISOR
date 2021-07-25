import { Model } from "sequelize"

export interface EquipementInterface {
    id_equipement: number;
    equipment_machine: string;
    atelier: string;
    etat_station: string;
    R_restriction: string;
    pieces_remplaces: string;
    operations_effectuees: string;
}

export class Equipement extends Model implements EquipementInterface {
    id_equipement!: number;
    equipment_machine!: string;
    atelier!: string;
    etat_station!: string;
    R_restriction!: string;
    pieces_remplaces!: string;
    operations_effectuees!: string;
}