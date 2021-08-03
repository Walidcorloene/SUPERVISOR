import { Request, Response } from "express";
import { Notam, NotamInterface } from "../models/notam.model";

export default class NotamController {
    public async index(req: Request, res: Response) {
        const notam = await Notam.findAll<Notam>({})
        console.log(notam)
        await Notam.findAll<Notam>({})
            .then((notam: Array<Notam>) => res.json(notam))
            .catch((err: Error) => res.status(500).json({ Message: "Notam Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: NotamInterface = req.body;
        console.log(params)
        await Notam.create<Notam>(params)
            .then((notam: Notam) => res.status(201).json(notam))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async getById(req: Request, res: Response) {
        const NotamId: number = parseInt(req.params.id_notam);

        await Notam.findByPk<Notam>(NotamId)
            .then((notam: Notam | null) => {
                if (notam) {
                    res.json(notam);
                } else {
                    res.status(404).json({ errors: ["Notam not found"] });
                }
            })
            .catch((err: Error) => res.status(500).json(err));
    }

    public async update(req: Request, res: Response) {
        const params: NotamInterface = req.body;
        console.log(params)
        await Notam.update<Notam>(params, { where: { id: params.id_notam } })
            .then(() => res.status(201).json({ Message: "Notam updated" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroy(req: Request, res: Response) {
        const params: NotamInterface = req.body;

        await Notam.destroy<Notam>({ where: { id: params.id_notam } })
            .then(() => res.status(201).json({ Message: "Notam deleted" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}