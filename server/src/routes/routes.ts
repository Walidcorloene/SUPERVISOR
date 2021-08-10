import UserController from "../controllers/user.controllers";
import express, { request, response } from "express";
//import ResponsableController from "../controllers/responsable.controller"
import PreventiveController from "../controllers/preventive.controller";
import CorrectiveController from "../controllers/corrective.controller";
import EquipementController from "../controllers/equipement.controller";
import EffectuerController from "../controllers/effectuer.controller";
import NotamController from "../controllers/notam.controller";
import CreerController from "../controllers/creer.controller";
import Signin from "../controllers/signin.controller";
import Register from "../controllers/register.controller";


export default class Routes {

    correctiveController: CorrectiveController = new CorrectiveController
    creerController: CreerController = new CreerController
    notamController: NotamController = new NotamController
    UserController: UserController = new UserController
    // responsableController: ResponsableController = new ResponsableController
    preventiveController: PreventiveController = new PreventiveController
    equipementController: EquipementController = new EquipementController
    effectuerController: EffectuerController = new EffectuerController
    signin: Signin = new Signin
    register: Register = new Register;
   

    public routes(app: express.Application): void {

        app.route("/user-signin")
            .post(this.signin.signinUser);

        app.route("/user-changePassword")
            .put(this.signin.resetPasswordTokenUser)

        app.route('/user-changePassword/:token')
            .get(this.signin.getPasswordToken)
            .post(this.signin.updateUserPassword)

        app.route("/register")
            .post(this.register.register);

        app.route("/user")
            .get(this.UserController.index)
            .post(this.UserController.create);

        app.route("/preventive")
            .get(this.preventiveController.index)
            .post(this.preventiveController.create);

        app.route("/corrective")
            .get(this.correctiveController.getAll)
            .post(this.correctiveController.create);

        app.route("/corrective/:id?")
            .put(this.correctiveController.update);

        app.route("/equipement")
            .get(this.equipementController.index)
            .post(this.equipementController.create);

        app.route("/notam")
            .get(this.notamController.index)
            .post(this.notamController.create)

        app.route("/effectuer")
            .get(this.effectuerController.index)
            .post(this.effectuerController.create)

        app.route("/creer")
            .get(this.creerController.index)
            .post(this.creerController.create)


    }
}