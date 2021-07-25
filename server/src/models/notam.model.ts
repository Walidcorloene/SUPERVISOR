//Notam: Lorsque la tache corrective est effectuée
//une notification est envoyée au responsable pour créer un Notam

export interface NotamInterface {
    id_notam: number;
    id_responsable: number;
    id_corrective: number;
    installation: string;
    cause: string;
    objetnotam: string;
    autre: string;
}

export class Notam implements NotamInterface {
    id_notam!: number;
    id_responsable!: number;
    id_corrective!: number;
    installation!: string;
    cause!: string;
    objetnotam!: string;
    autre!: string;
}
