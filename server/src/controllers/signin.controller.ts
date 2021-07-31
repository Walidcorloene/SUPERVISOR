import { Request, Response } from "express";
import { Responsable, ResponsableInterface } from "../models/responsable.model";
import { Ingenieur, IngenieurInterface } from "../models/ingenieur.model";
import bcrypt from "bcrypt"

export default class Signin {

    /*  
      checkPassword(password: string, originalPass: string): Boolean {
          if (password != originalPass){
              return false;
          }
          return true;  
        //const matched = await bcrypt.compare(password, originalPass);
          //if (matched) {
          //    return true;
          //}
          //return false;
      }
  */
    public async signinIngenieur(req: Request, res: Response) {
        let _body: IngenieurInterface = req.body;

        if (!(_body.email && _body.password)) { // si l'utilisateur n'a pas entré d'email et password -> erreur
            return res.status(400).json("Sign in Error: Missing data")
        }

        const _param = {
            where: {
                email: _body.email,
            },
            limit: 1,
        };

        let user = await Ingenieur.findOne(_param);

        if (!user)
            return res.status(500).json("Error User: No user found");

        if (_body.password != user.password)


            return res.status(500).json("Error User: Wrong password");

        return res.status(200).json("User Signed in")
    }

    public async signinResponsable(req: Request, res: Response) {
        let _body: ResponsableInterface = req.body;

        if (!(_body.email && _body.password)) { // si l'utilisateur n'a pas entré d'email et password -> erreur
            return res.status(400).json("Sign in Error: Missing Data")
        }

        const _param = {
            where: {
                email: _body.email,
            },
            limit: 1,
        };

        let user = await Responsable.findOne(_param);

        if (!user)
            return res.status(500).json("Error User: No user found");

        if (_body.password != user.password)
            return res.status(500).json("Error User: Wrong password");

        return res.status(200).json("User Signed in")
    }


}