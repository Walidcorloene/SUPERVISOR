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

    public async getById(req: Request, res: Response) {
        const ResponsableId: number = parseInt(req.params.id_responsable);

        Responsable.findByPk<Responsable>(ResponsableId)
            .then((responsable: Responsable | null) => {
                if (responsable) {
                    res.json(responsable);
                } else {
                    res.status(404).json({ errors: ["Responsable not found"] });
                }
            })
            .catch((err: Error) => res.status(500).json(err));
    }

    public async update(req: Request, res: Response) {
        const params: ResponsableInterface = req.body;
        console.log(params)
        Responsable.update<Responsable>(params, { where: { id: params.id_responsable } })
            .then(() => res.status(201).json({ Message: "Responsable updated" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroy(req: Request, res: Response) {
        const params: ResponsableInterface = req.body;

        Responsable.destroy<Responsable>({ where: { id: params.id_responsable } })
            .then(() => res.status(201).json({ Message: "Responsable deleted" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}