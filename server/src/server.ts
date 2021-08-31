import express, { request, response } from "express";
import * as bodyParser from "body-parser";
import Routes from "./routes/routes"
import { database } from "./config/database";
import Signin from "./controllers/signin.controller";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors"
const process = require('process');
dotenv.config();

export default class Server {
    public app: express.Application;
    public port: number;
    public route: Routes = new Routes();
    public signin: Signin = new Signin;
    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.config();
        this.app.use(cookieParser());
        this.app.use(
            express.urlencoded({
                extended: true,
            })
        );
        this.app.use(cors())
        this.app.use(express.static('src/public'));
        this.app.set("view engine", "ejs");
        this.app.set('views', 'src/view');
        this.route.routes(this.app);
    }

    public listen() {
        this.app.listen(this.port, process.env.IP_AD, async () => {
            console.log(`Example app listening on port ${this.port}!`)
            await database.authenticate()
            console.log("database synced")
        });
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}
