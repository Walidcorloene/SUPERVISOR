import express from "express";
import * as bodyParser from "body-parser";
import Routes from "./routes/routes"

export default class Server {

    public app: express.Application;
    public port: number;
    public route:Routes = new Routes();

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.config();
        this.route.routes(this.app);
    }

    public listen() {
        this.app.listen(this.port, () => console.log(`Example app listening on port ${this.port}!`));
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    
}