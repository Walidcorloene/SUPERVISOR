import { Request, Response } from "express";
import { Responsable, ResponsableInterface } from "../models/responsable.model";
import { Ingenieur, IngenieurInterface } from "../models/ingenieur.model";
import bcrypt from "bcrypt"

export default class Signin {


    static checkPassword(password: string, originalPass: string) {

        const matched = bcrypt.compareSync(password, originalPass);

        return matched;
    }

    static checkFields(email: any, password: any) {
        if (!(email) || !(password)) // si l'utilisateur n'a pas entré d'email et password -> erreur
            return false;

        return true;
    }

    static async checkUser(email: any, User: any) {
        const _param = {
            where: {
                email: email,
            },
            limit: 1,
        };

        let user = await User.findOne(_param);

        return user;
    }


    public async signinIngenieur(req: Request, res: Response) {
        let _body: IngenieurInterface = req.body;

        if (!(Signin.checkFields(_body.email, _body.password)))
            return res.status(400).json("Sign in Error: Missing Data")

        const user = await Signin.checkUser(_body.email, Ingenieur);
        if (!user)
            return res.status(500).json("Error User: No user found");

        if (!(Signin.checkPassword(_body.password, user.password)))
            return res.status(500).json("Error User: Wrong password");

        return res.status(200).json("User Signed in")
    }

    public async signinResponsable(req: Request, res: Response) {
        let _body: ResponsableInterface = req.body;

        if (!(Signin.checkFields(_body.email, _body.password)))
            return res.status(400).json("Sign in Error: Missing Data")

        const user = await Signin.checkUser(_body.email, Responsable);

        if (!user)
            return res.status(500).json("Error User: No user found");

        if (!(Signin.checkPassword(_body.password, user.password)))
            return res.status(500).json("Error User: Wrong password");

        return res.status(200).json("User Signed in")
    }


}