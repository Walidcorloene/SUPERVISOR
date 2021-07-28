import { Request, Response } from "express";
import { Effectuer, EffectuerInterface } from "../models/effectuer.model";

export default class EffectuerController {
    public async index(req: Request, res: Response) {
        const effectuer= await Effectuer.findAll<Effectuer>({}) 
        console.log(effectuer)
        Effectuer.findAll<Effectuer>({})
            .then((effectuer: Array<Effectuer>) => res.json(effectuer))
            .catch((err: Error) => res.status(500).json({ Message: "Effectuer Controller Error", err }));
    }

    public  async create(req: Request, res: Response) {
        const params: EffectuerInterface = req.body;
        console.log(params)
        Effectuer.create<Effectuer>(params)
            .then((effectuer: Effectuer) => res.status(201).json(effectuer))
            .catch((err: Error) => res.status(500).json(err));
        }
    
}