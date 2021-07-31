import { Request, Response } from "express";
import { Preventive, PreventiveInterface } from "../models/preventive.model";

export default class PreventiveController {
    public async index(req: Request, res: Response) {
        const preventive = await Preventive.findAll<Preventive>({})
        console.log(preventive)
        Preventive.findAll<Preventive>({})
            .then((preventive: Array<Preventive>) => res.json(preventive))
            .catch((err: Error) => res.status(500).json({ Message: "Preventive Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: PreventiveInterface = req.body;
        console.log(params)
        Preventive.create<Preventive>(params)
            .then((preventive: Preventive) => res.status(201).json(preventive))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async getById(req: Request, res: Response) {
        const PreventiveId: number = parseInt(req.params.id_preventive);

        Preventive.findByPk<Preventive>(PreventiveId)
        .then((preventive: Preventive | null) => {
            if (preventive) {
                res.json(preventive);
            } else {
                res.status(404).json({ errors: ["Preventive not found"] });
            }
        })
        .catch((err: Error) => res.status(500).json(err));
    }

    public async update(req: Request, res: Response) {
        const params: PreventiveInterface = req.body;
        console.log(params)
        Preventive.update<Preventive>(params, { where: { id: params.id_preventive } })
            .then(() => res.status(201).json({ Message: "preventive Updated with success" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroy(req: Request, res: Response) {
        const params: PreventiveInterface = req.body;

        Preventive.destroy<Preventive>({ where: { id: params.id_preventive } })
            .then(() => res.status(201).json({ Message: "preventive deleted with success" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}