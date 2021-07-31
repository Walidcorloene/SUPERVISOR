import { Request, Response } from "express";
import { Effectuer, EffectuerInterface } from "../models/effectuer.model";

export default class EffectuerController {
    public async index(req: Request, res: Response) {
        const effectuer = await Effectuer.findAll<Effectuer>({})
        console.log(effectuer)
        Effectuer.findAll<Effectuer>({})
            .then((effectuer: Array<Effectuer>) => res.json(effectuer))
            .catch((err: Error) => res.status(500).json({ Message: "Effectuer Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: EffectuerInterface = req.body;
        console.log(params)
        Effectuer.create<Effectuer>(params)
            .then((effectuer: Effectuer) => res.status(201).json(effectuer))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async getById(req: Request, res: Response) {
        const IngenieurId: number = parseInt(req.params.IngenieurIdIngenieur);

        Effectuer.findByPk<Effectuer>(IngenieurId)
            .then((effectuer: Effectuer | null) => {
                if (effectuer) {
                    res.json(effectuer);
                } else {
                    res.status(404).json({ errors: ["effectuer not found"] });
                }
            })
            .catch((err: Error) => res.status(500).json(err));
    }

    public async update(req: Request, res: Response) {
        const params: EffectuerInterface = req.body;
        console.log(params)
        Effectuer.update<Effectuer>(params, { where: { id: params.IngenieurIdIngenieur } })
            .then(() => res.status(201).json({ Message: "Updated with success" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroy(req: Request, res: Response) {
        const params: EffectuerInterface = req.body;

        Effectuer.destroy<Effectuer>({ where: { id: params.IngenieurIdIngenieur } })
            .then(() => res.status(201).json({ Message: "Effectuer deleted" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}