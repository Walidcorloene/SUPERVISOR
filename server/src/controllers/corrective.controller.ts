import { Request, Response } from "express";
import { Corrective, CorrectiveInterface } from "../models/corrective.model";

export default class CorrectiveController {
    public async index(req: Request, res: Response) {
        const corrective = await Corrective.findAll<Corrective>({})
        console.log(corrective)
        Corrective.findAll<Corrective>({})
            .then((corrective: Array<Corrective>) => res.json(corrective))
            .catch((err: Error) => res.status(500).json({ Message: "Corrective Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: CorrectiveInterface = req.body;
        console.log(params)
        Corrective.create<Corrective>(params)
            .then((corrective: Corrective) => res.status(201).json(corrective))
            .catch((err: Error) => res.status(500).json(err));
    }

}