import IngenieurController from "../controllers/ingenieur.controllers";
import ResponsableController from "../controllers/responsable.controller"
import PreventiveController from "../controllers/preventive.controller";
import CorrectiveController from "../controllers/corrective.controller";
import EquipementController from "../controllers/equipement.controller";
import EffectuerController from "../controllers/effectuer.controller";
import NotamController from "../controllers/notam.controller";
import CreerController from "../controllers/creer.controller";
import express from "express";

export default class Routes {

    public ingenieurController: IngenieurController = new IngenieurController();
    public responsableController: ResponsableController = new ResponsableController();
    public preventiveController: PreventiveController = new PreventiveController();
    public correctiveController: CorrectiveController = new CorrectiveController();
    public equipementController: EquipementController = new EquipementController();
    public effectuerConteller: EffectuerController = new EffectuerController();
    public notamController: NotamController = new NotamController();
    public creerController: CreerController = new CreerController();

    public routes(app: express.Application): void {
        app.route("/ingenieur")
        .get(this.ingenieurController.index)
        .post(this.ingenieurController.create);
        
        app.route("/responsable")
        .get(this.responsableController.index)
        .post(this.responsableController.create);

        app.route("/preventive")
        .get(this.preventiveController.index)
        .post(this.responsableController.create);

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
        .get(this.effectuerConteller.index)
        .post(this.effectuerConteller.create)

        app.route("/creer")
        .get(this.creerController.index)
        .post(this.effectuerConteller.create)

    }
}