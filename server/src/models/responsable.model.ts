
import { Model } from "sequelize"

export interface ResponsableInterface {
    id_responsable: number;
    email: string;
    name: string;
    surname: string;
    login: string;
    password: string;
}

export class Responsable extends Model implements ResponsableInterface {
    id_responsable!: number;
    email!: string; //null
    name!: string; //? not null
    surname!: string;
    login!: string;
    password!: string;
}
