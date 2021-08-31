import { resolveSoa } from "dns";
import { Response, Request } from "express";
import jwt from 'jsonwebtoken';
const process = require('process');
import dotenv from "dotenv"
dotenv.config();

export default function authenticateToken(req: Request, res: Response, next: () => void) {
    const token = req.header("auth-token");
    if (!token)
        return res.status(401).send("Access Denied")

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.body = verified;
        next();
    } catch(error){
        res.status(400).send("invalid Token")
    }
    
    
}
