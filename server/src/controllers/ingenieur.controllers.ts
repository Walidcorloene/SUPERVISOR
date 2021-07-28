///import { Request, Response } from "express";
///import { Ingenieur, IngenieurInterface } from "../models/ingenieur.model";
///
///export default class IngenieurController {
///    public async index(req: Request, res: Response) {
///        const ingenieur= await Ingenieur.findAll<Ingenieur>({})
///        console.log(ingenieur)
///        Ingenieur.findAll<Ingenieur>({})
///            .then((ingenieur: Array<Ingenieur>) => res.json(ingenieur))
///            .catch((err: Error) => res.status(500).json({ Message: "Ingenieur Controller Error", err }));
///    }
///
///    public async create(req: Request, res: Response) {
///        const params: IngenieurInterface = req.body;
///        console.log(params)
///        Ingenieur.create<Ingenieur>(params)
///            .then((ingenieur: Ingenieur) => res.status(201).json(ingenieur))
///            .catch((err: Error) => res.status(500).json(err));
///        }
///    
///}