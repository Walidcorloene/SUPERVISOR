import { Request, Response } from "express";
import { where } from "sequelize";
import { isDataView } from "util/types";
import { User, UserInterface } from "../models/user.model";

export default class UserController {
    public async index(req: Request, res: Response) {
        const user = await User.findAll<User>({})
        console.log(user)
        await User.findAll<User>({})
            .then((user: Array<User>) => res.json(user))
            .catch((err: Error) => res.status(500).json({ Message: "User Controller Error", err }));
    }

    public async create(req: Request, res: Response) {
        const params: UserInterface = req.body;
        console.log(params)
        await User.create<User>(params)
            .then((user: User) => res.status(201).json(user))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async getById(req: Request, res: Response) {
        const userId: number = parseInt(req.params.id_user);

        await User.findByPk<User>(userId)
        .then((user: User | null) => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ errors: ["User not found"] });
            }
        })
        .catch((err: Error) => res.status(500).json(err));
    }

    public async update(req: Request, res: Response) {
        const params: UserInterface = req.body;
        console.log(params)
        await User.update<User>(params, { where: { id: params.id_user } })
            .then(() => res.status(201).json({ Message: "user updated" }))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async destroy(req: Request, res: Response) {
        const params: UserInterface = req.body;

        await User.destroy<User>({ where: { id: params.id_user } })
            .then(() => res.status(201).json({ Message: "user deleted" }))
            .catch((err: Error) => res.status(500).json(err));
    }
}