///import { Request, Response } from "express";
///import { Preventive, PreventiveInterface } from "../models/preventive.model";
///
///
///export default class PreventiveController {
///    public async index(req: Request, res: Response) {
///        const preventive= await Preventive.findAll<Preventive>({}) 
///        console.log(preventive)
///        Preventive.findAll<Preventive>({})
///            .then((preventive: Array<Preventive>) => res.json(preventive))
///            .catch((err: Error) => res.status(500).json({ Message: "Preventive Controller Error", err }));
///    }
///
///    public  async create(req: Request, res: Response) {
///        const params: PreventiveInterface = req.body;
///        console.log(params)
///        Preventive.create<Preventive>(params)
///            .then((preventive: Preventive) => res.status(201).json(preventive))
///            .catch((err: Error) => res.status(500).json(err));
///        }
///    
///}