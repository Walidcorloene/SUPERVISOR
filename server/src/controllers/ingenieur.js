var sequelize = require("sequelize");
var initModels = require("../models/init-models");
var models = initModels(sequelize);

async function index(req, res) {
    const ingenieur = await models.ingenieur.findAll({})
    console.log(ingenieur)
    models.ingenieur.findAll({})
        .then((ingenieur) => res.json(ingenieur))
        .catch((err) => res.status(500).json({ Message: "ingenieur Controller Error", err }));
}

async function create(req, res) {
    const params = req.body;
    console.log(params)
    ingenieur.create(params)
        .then((ingenieur) => res.status(201).json(ingenieur))
        .catch((err) => res.status(500).json(err));
}

module.exports = {
    index,
    create
}