import { Request, Response } from "express";
import { Equipement, EquipementInterface } from "../models/equipement.model";

export default class EquipementController {
    public async index(req: Request, res: Response) {
        const equipement = await Equipement.findAll<Equipement>({})
        console.log(req)
        await Equipement.findAll<Equipement>({})
            .then((equipement: Array<Equipement>) => res.json(equipement))
            .catch((err: Error) => res.status(500).json({ Message: "Equipement Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: EquipementInterface = req.body;
        console.log(req)

        await Equipement.create<Equipement>(params)
            .then((equipement: Equipement) => res.status(201).json(equipement))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async getById(req: Request, res: Response) {
        const EquipementId: number = parseInt(req.params.id_equipement);

        await Equipement.findByPk<Equipement>(EquipementId)
            .then((equipement: Equipement | null) => {
                if (equipement) {
                    res.json(equipement);
                } else {
                    res.status(404).json({ errors: ["Equipement not found"] });
                }
            })
            .catch((err: Error) => res.status(500).json(err));
    }

    public async update(req: Request, res: Response) {
        const params: EquipementInterface = req.body;
        console.log(params)
        await Equipement.update<Equipement>(params, { where: { id: params.id_equipement } })
            .then(() => res.status(201).json({ Message: "Updated with success" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroy(req: Request, res: Response) {
        const params: EquipementInterface = req.body;

        await Equipement.destroy<Equipement>({ where: { id: params.id_equipement } })
            .then(() => res.status(201).json({ Message: "Equipement deleted" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}