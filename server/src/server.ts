import express from "express";
import * as bodyParser from "body-parser";

export default class Server{

    public app: express.Application;
    public port : number;

    constructor(port:number){
        this.app= express();
        this.port=port;
        this.config();
    }

    public listen(){
    this.app.listen(this.port, ()=> console.log(`Example app listening on port ${this.port}!`));
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}  