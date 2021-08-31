import { Request, Response } from "express";
import { Creer, CreerInterface } from "../models/creer.model";
import { Corrective, CorrectiveInterface } from "../models/corrective.model"
import { User } from "../models/user.model";

export default class CreerController {

    public async getAll(req: Request, res: Response) {
        await Creer.findAll<Creer>({})
        .then((creer: Array<Creer>) => res.json(creer))
        .catch((err: Error) => res.status(500).json({ Message: "Creer Controller Error", err }));
    }

    public async getById(req: Request, res: Response) {
        const UserId: number = parseInt(req.params.UserIdUser);

        await Creer.findByPk<Creer>(UserId)
            .then((Creer: Creer | null) => {
                if (Creer) {
                    res.json(Creer);
                } else {
                    res.status(404).json({ errors: ["Creer not found"] });
                }
            })
            .catch((err: Error) => res.status(500).json(err));
    }

    public async update(req: Request, res: Response) {
        const params: CreerInterface = req.body;
        console.log(params)
        await Creer.update<Creer>(params, { where: { id: params.UserIdUser } })
            .then(() => res.status(201).json({ Message: "Updated with success" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroy(req: Request, res: Response) {
        const params: CreerInterface = req.body;

        await Creer.destroy<Creer>({ where: { id: params.UserIdUser } })
            .then(() => res.status(201).json({ Message: "Creer deleted" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}