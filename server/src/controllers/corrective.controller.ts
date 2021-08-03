import { Request, Response } from "express";
import { Corrective, CorrectiveInterface } from "../models/corrective.model";

export default class CorrectiveController {
    public async index(req: Request, res: Response) {
        const corrective = await Corrective.findAll<Corrective>({})
        console.log(corrective)
        await Corrective.findAll<Corrective>({})
            .then((corrective: Array<Corrective>) => res.json(corrective))
            .catch((err: Error) => res.status(500).json({ Message: "Corrective Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: CorrectiveInterface = req.body;
        console.log(params)
        await Corrective.create<Corrective>(params)
            .then((corrective: Corrective) => res.status(201).json(corrective))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async getById(req: Request, res: Response) {
        const CorrectiveId: number = parseInt(req.params.id_corrective);

        await Corrective.findByPk<Corrective>(CorrectiveId)
            .then((corrective: Corrective | null) => {
                if (corrective) {
                    res.json(corrective);
                } else {
                    res.status(404).json({ errors: ["Corrective not found"] });
                }
            })
            .catch((err: Error) => res.status(500).json(err));
    }

    public async update(req: Request, res: Response) {
        const params: CorrectiveInterface = req.body;
        console.log(params)
        await Corrective.update<Corrective>(params, { where: { id: params.id_corrective } })
            .then(() => res.status(201).json({ Message: "Corrective Updated with success" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroy(req: Request, res: Response) {
        const params: CorrectiveInterface = req.body;

        await Corrective.destroy<Corrective>({ where: { id: params.id_corrective } })
            .then(() => res.status(201).json({ Message: "corrective deleted with success" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}