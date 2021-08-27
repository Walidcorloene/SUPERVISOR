import Server from "./server";
import dotenv from "dotenv"
const process = require('process');
dotenv.config();
const server = new Server(process.env.PORT)
server.listen()


