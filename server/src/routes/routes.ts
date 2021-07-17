import { Application } from "express-serve-static-core";
import UserController from "../controllers/user.controllers";

export default class Routes {
    public userController: UserController = new UserController;
 
    public routes(app: Application): void {
        app.route("/")
        .get(this.userController.index)
        .post(this.userController.create);
    }
}