import { Request, Response } from "express";
import sequelize, { Model } from "sequelize";
import corrective from "../models/corrective";
import { Corrective, CorrectiveInterface } from "../models/corrective.model";

var initModels = require("./models/init-models");
var models = initModels(sequelize);

public async index(req, res) {
    const corrective = await models.corrective.findAll<models.corrective>({}) 
      
 
       console.log(corrective)
        Corrective.findAll<Corrective>({})
            .then((corrective: Array<Corrective>) => res.json(corrective))
            .catch((err: Error) => res.status(500).json({ Message: "Corrective Controller Error", err }));
    }

    public  async create(req: Request, res: Response) {
        const params: CorrectiveInterface = req.body;
        console.log(params)
        Corrective.create<Corrective>(params)
            .then((corrective: Corrective) => res.status(201).json(corrective))
            .catch((err: Error) => res.status(500).json(err));
        }
    
}