import { Request, Response } from "express";
import { Creer, CreerInterface } from "../models/creer.model";

export default class CreerController {

    public async index(req: Request, res: Response) {
        const creer = await Creer.findAll<Creer>({})
        console.log(creer)
        Creer.findAll<Creer>({})
            .then((creer: Array<Creer>) => res.json(creer))
            .catch((err: Error) => res.status(500).json({ Message: "Creer Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: CreerInterface = req.body;
        console.log(params)
        Creer.create<Creer>(params)
            .then((creer: Creer) => res.status(201).json(creer))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async getById(req: Request, res: Response) {
        const IngenieurId: number = parseInt(req.params.IngenieurIdIngenieur);

        Creer.findByPk<Creer>(IngenieurId)
        .then((Creer: Creer | null) => {
            if (Creer) {
                res.json(Creer);
            } else {
                res.status(404).json({ errors: ["Creer not found"] });
            }
        })
        .catch((err: Error) => res.status(500).json(err));
    }

    public async update(req: Request, res: Response) {
        const params: CreerInterface = req.body;
        console.log(params)
        Creer.update<Creer>(params, { where: { id: params.IngenieurIdIngenieur } })
            .then(() => res.status(201).json({ Message: "Updated with success" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroy(req: Request, res: Response) {
        const params: CreerInterface = req.body;

        Creer.destroy<Creer>({ where: { id: params.IngenieurIdIngenieur } })
            .then(() => res.status(201).json({ Message: "Creer deleted" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}