import ingenieurController from "../controllers/ingenieur";
import express from "express";
//import ResponsableController from "../controllers/responsable.controller"
//import PreventiveController from "../controllers/preventive.controller";
//import CorrectiveController from "../controllers/corrective.controller";
//import _equipementController from "../controllers/equipement.controller";
//import _effectuerController from "../controllers/effectuer.controller";
//import _notamController from "../controllers/notam.controller";
//var _creerController = require("../controllers/creer.controller");
//var _correctiveController = require("../controllers/corrective.controllers")

export default class Routes {
    
    //correctiveController = _correctiveController
    //creerController = _creerController
    //notamController = _notamController
    _ingenieurController = ingenieurController

    public routes(app: express.Application): void {
        app.route("/ingenieur")
        .get(this._ingenieurController.index)
        .post(this._ingenieurController.create);
        
//        app.route("/responsable")
//        .get(this.responsableController.index)
//        .post(this.responsableController.create);
//
//        app.route("/preventive")
//        .get(this.preventiveController.index)
//        .post(this.responsableController.create);
//
//        app.route("/corrective")
//        .get(this.correctiveController.index)
//        .post(this.correctiveController.create);
//
//        app.route("/equipement")
//        .get(this.equipementController.index)
//        .post(this.equipementController.create);
//
//        app.route("/notam")
//        .get(this.notamController.index)
//        .post(this.notamController.create)
// 
//        app.route("/effectuer")
//        .get(this.effectuerConteller.index)
//        .post(this.effectuerConteller.create)
//
//        app.route("/creer")
//        .get(this.creerController.index)
//        .post(this.effectuerConteller.create)
//
    }
}