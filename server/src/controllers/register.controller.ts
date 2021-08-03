import { Request, Response } from "express";
import { Responsable, ResponsableInterface } from "../models/responsable.model";
import bcrypt from "bcrypt"

export default class Register {
    public async register(req: Request, res: Response) {
        const _body: ResponsableInterface = req.body
        const _param = {
            where: {
                email: _body.email,
            },
            limit: 1,
        };

        let user = await Responsable.findOne(_param);

        if (user) {
            return res.status(400).json("Error User: User already registered");
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = bcrypt.hashSync(_body.password, 10);

        const newResponsable = {
            name: _body.name,
            surname: _body.surname,
            login: _body.login,
            email: _body.email,
            password: hashPassword
        };
        console.log("newResponsable", newResponsable)
        console.log("body", _body)
        /* 
    */

        Responsable.create<Responsable>(newResponsable)
            .then((responsable: Responsable) => res.status(201).json(responsable))
            .catch((err: Error) => res.status(500).json(err));

        //let newResponsable = Responsable.create<Responsable>(responsable)
        //if (!newResponsable) {
        //    return res.status(500).json("Error User: User already registered");
        //}
        //console.log(newResponsable)
        //return res.status(201).json(newResponsable);
    }
}

