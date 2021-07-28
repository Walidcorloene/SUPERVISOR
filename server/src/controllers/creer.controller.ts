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

}