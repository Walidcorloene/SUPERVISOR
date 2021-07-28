import { Request, Response } from "express";
import { Responsable, ResponsableInterface } from "../models/responsable.model";

export default class ResponsableController {
    public async index(req: Request, res: Response) {
        const responsable = await Responsable.findAll<Responsable>({})
        console.log(responsable)
        Responsable.findAll<Responsable>({})
            .then((responsable: Array<Responsable>) => res.json(responsable))
            .catch((err: Error) => res.status(500).json({ Message: "Responsable Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: ResponsableInterface = req.body;
        console.log(params)
        Responsable.create<Responsable>(params)
            .then((responsable: Responsable) => res.status(201).json(responsable))
            .catch((err: Error) => res.status(500).json(err));
    }

}