import IngenieurController from "../controllers/ingenieur.controllers";
import express from "express";
import ResponsableController from "../controllers/responsable.controller"
import PreventiveController from "../controllers/preventive.controller";
import CorrectiveController from "../controllers/corrective.controller";
import EquipementController from "../controllers/equipement.controller";
import EffectuerController from "../controllers/effectuer.controller";
import NotamController from "../controllers/notam.controller";
import CreerController from "../controllers/creer.controller";

export default class Routes {

    correctiveController: CorrectiveController = new CorrectiveController
    creerController: CreerController = new CreerController
    notamController: NotamController = new NotamController
    ingenieurController: IngenieurController = new IngenieurController
    responsableController: ResponsableController = new ResponsableController
    preventiveController: PreventiveController = new PreventiveController
    equipementController: EquipementController = new EquipementController
    effectuerController: EffectuerController = new EffectuerController

    public routes(app: express.Application): void {

        app.route("/ingenieur")
            .get(this.ingenieurController.index)
            .post(this.ingenieurController.create);

        app.route("/responsable")
            .get(this.responsableController.index)
            .post(this.responsableController.create);

        app.route("/preventive")
            .get(this.preventiveController.index)
            .post(this.preventiveController.create);

        app.route("/corrective")
            .get(this.correctiveController.index)
            .post(this.correctiveController.create);

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