import { Request, Response } from "express";
import { User, UserInterface } from "../models/user.model";
import { UpdateOptions, DestroyOptions } from "sequelize";

export default class UserController {
    public index(req: Request, res: Response) {
        User.findAll<User>({})
            .then((user: Array<User>) => res.json(user))
            .catch((err: Error) => res.status(500).json({ Message: "User Controller Error", err }));
    }

    public create(req: Request, res: Response) {
        const params: UserInterface = req.body;
        User.create<User>(params)
            .then((user: User) => res.status(201).json(user))
            .catch((err: Error) => res.status(500).json(err));
    }
}