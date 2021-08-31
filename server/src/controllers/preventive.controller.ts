import { Request, Response } from "express";
import { Preventive, PreventiveInterface } from "../models/preventive.model";

export default class PreventiveController {
    public async getAllPreventive(req: Request, res: Response) {
        const preventive = await Preventive.findAll<Preventive>({});
        if (!preventive) {
            return res.status(500).json("Error while getting preventive");
        }
        res.status(200).json(preventive);
        return preventive;
    }

    public async create(req: Request, res: Response) {
        const params: PreventiveInterface = req.body;
        console.log(params)
        await Preventive.create<Preventive>(params)
            .then((preventive: Preventive) => res.status(201).json(preventive))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async getById(req: Request, res: Response) {
        const PreventiveId: number = parseInt(req.params.id_preventive);

        await Preventive.findByPk<Preventive>(PreventiveId)
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
        await Preventive.update<Preventive>(params, { where: { id: params.id_preventive } })
            .then(() => res.status(201).json({ Message: "preventive Updated with success" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroy(req: Request, res: Response) {
        const params: PreventiveInterface = req.body;

        await Preventive.destroy<Preventive>({ where: { id: params.id_preventive } })
            .then(() => res.status(201).json({ Message: "preventive deleted with success" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}