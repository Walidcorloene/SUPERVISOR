import { Request, Response } from "express";
import { where } from "sequelize";
import { isDataView } from "util/types";
import { Ingenieur, IngenieurInterface } from "../models/ingenieur.model";

export default class IngenieurController {
    public async index(req: Request, res: Response) {
        const ingenieur = await Ingenieur.findAll<Ingenieur>({})
        console.log(ingenieur)
        Ingenieur.findAll<Ingenieur>({})
            .then((ingenieur: Array<Ingenieur>) => res.json(ingenieur))
            .catch((err: Error) => res.status(500).json({ Message: "Ingenieur Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: IngenieurInterface = req.body;
        console.log(params)
        Ingenieur.create<Ingenieur>(params)
            .then((ingenieur: Ingenieur) => res.status(201).json(ingenieur))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async getById(req: Request, res: Response) {
        const IngenieurId: number = parseInt(req.params.id_ingenieur);

        Ingenieur.findByPk<Ingenieur>(IngenieurId)
        .then((ingenieur: Ingenieur | null) => {
            if (ingenieur) {
                res.json(ingenieur);
            } else {
                res.status(404).json({ errors: ["Ingenieur not found"] });
            }
        })
        .catch((err: Error) => res.status(500).json(err));
    }

    public async update(req: Request, res: Response) {
        const params: IngenieurInterface = req.body;
        console.log(params)
        Ingenieur.update<Ingenieur>(params, { where: { id: params.id_ingenieur } })
            .then(() => res.status(201).json({ Message: "ingenieur updated" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroy(req: Request, res: Response) {
        const params: IngenieurInterface = req.body;

        Ingenieur.destroy<Ingenieur>({ where: { id: params.id_ingenieur } })
            .then(() => res.status(201).json({ Message: "ingenieur deleted" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}