import { Request, Response } from "express";
import { User, UserInterface } from "../models/user.model";
import bcrypt from "bcrypt"

export default class Register {
    public async register(req: Request, res: Response) {
        const _body: UserInterface = req.body
        const _param = {
            where: {
                email: _body.email,
            },
            limit: 1,
        };

        let user = await User.findOne(_param);

        if (user) {
            return res.status(400).json("Error User: User already registered");
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = bcrypt.hashSync(_body.password, 10);

        const newUser = {
            name: _body.name,
            surname: _body.surname,
            login: _body.login,
            email: _body.email,
            password: hashPassword,
            role:_body.role
        };
        console.log("newUser", newUser)
        console.log("body", _body)
        /* 
    */

        User.create<User>(newUser)
            .then((user: User) => res.status(201).json(user))
            .catch((err: Error) => res.status(500).json(err));

        //let newResponsable = Responsable.create<Responsable>(responsable)
        //if (!newResponsable) {
        //    return res.status(500).json("Error User: User already registered");
        //}
        //console.log(newResponsable)
        //return res.status(201).json(newResponsable);
    }
}

