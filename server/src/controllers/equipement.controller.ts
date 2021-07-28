import { Request, Response } from "express";
import { Equipement, EquipementInterface } from "../models/equipement.model";

export default class EquipementController {
    public async index(req: Request, res: Response) {
        const equipement = await Equipement.findAll<Equipement>({})
        console.log(equipement)
        Equipement.findAll<Equipement>({})
            .then((equipement: Array<Equipement>) => res.json(equipement))
            .catch((err: Error) => res.status(500).json({ Message: "Equipement Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: EquipementInterface = req.body;
        console.log(params)
        Equipement.create<Equipement>(params)
            .then((equipement: Equipement) => res.status(201).json(equipement))
            .catch((err: Error) => res.status(500).json(err));
    }

}