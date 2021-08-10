import { Request, Response } from "express";
import { Corrective, CorrectiveInterface } from "../models/corrective.model";
import { User, UserInterface } from "../models/user.model";

export default class CorrectiveController {

    public async getAll(req: Request, res: Response) {
        const corrective = await Corrective.findAll<Corrective>({})
        console.log(corrective)
        await Corrective.findAll<Corrective>({})
            .then((corrective: Array<Corrective>) => res.json(corrective))
            .catch((err: Error) => res.status(500).json({ Message: "Corrective Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const body: CorrectiveInterface = req.body;

        const params = {
            where: {
                nom_technicien: body.nom_technicien
            },
            limit: 1
        };
        const corrective = await Corrective.findOne(params);

        const new_corrective = await Corrective.create<Corrective>(body)
        if (!new_corrective)
            return res.status(500).json("Error Correctrive: Can't create corrective");
        
        return res.status(201).json("Corrective task created");
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
        const CorrectiveId: number = parseInt(req.params.id_corrective);

        const corrective = await Corrective.findByPk<Corrective>(CorrectiveId)
        if (!corrective)
            res.status(404).json("Corrective error: can not find corrective");
        
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