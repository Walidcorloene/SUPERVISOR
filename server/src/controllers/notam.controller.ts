import { Request, Response } from "express";
import { Notam, NotamInterface } from "../models/notam.model";

export default class NotamController {
    public async index(req: Request, res: Response) {
        const notam = await Notam.findAll<Notam>({})
        console.log(notam)
        Notam.findAll<Notam>({})
            .then((notam: Array<Notam>) => res.json(notam))
            .catch((err: Error) => res.status(500).json({ Message: "Notam Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: NotamInterface = req.body;
        console.log(params)
        Notam.create<Notam>(params)
            .then((notam: Notam) => res.status(201).json(notam))
            .catch((err: Error) => res.status(500).json(err));
    }

}