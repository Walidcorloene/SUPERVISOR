import UserController from "../controllers/user.controllers";
import express from "express";

export default class Routes {
    public userController: UserController = new UserController();
 
    public routes(app: express.Application): void {
        app.route("/")
        .get(this.userController.index)
        .post(this.userController.create);
    }
}