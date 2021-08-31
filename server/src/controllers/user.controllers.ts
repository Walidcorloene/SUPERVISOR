import { Request, Response } from "express";
import { TableHints, where } from "sequelize";
import { isDataView } from "util/types";
import { User, UserInterface } from "../models/user.model";

export default class UserController {
    public async getIngenieurs(req: Request, res: Response) {
        const params = {
            where: {
                role: "ingenieur"
            }
        };
        const ingenieurs = await User.findAll<User>(params);
        if (!ingenieurs) {
            return res.status(500).json("Error while getting users");
        }
        res.status(200).json(ingenieurs);
        return ingenieurs;
    }

    public async updateIngenieur(req: Request, res: Response) {
        console.log(req);
        await User.update<User>(req.body, { where: { id_user: req.params.id_user } })
            .then(() => res.status(201).json({ Message: "user updated" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroyIngenieur(req: Request, res: Response) {
        const _params = req.params;

        await User.destroy<User>({ where: { id_user: _params.id_user } })
            .then(() => res.status(201).json({ Message: "user deleted" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}