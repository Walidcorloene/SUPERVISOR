var sequelize = require("sequelize");
var initModels = require("./models/init-models");
var models = initModels(sequelize);

async function index(req, res) {
    const corrective = await models.corrective.findAll({})
    console.log(corrective)
    models.corrective.findAll({})
        .then((corrective) => res.json(corrective))
        .catch((err) => res.status(500).json({ Message: "Corrective Controller Error", err }));
}

async function create(req, res) {
    const params = req.body;
    console.log(params)
    Corrective.create(params)
        .then((corrective) => res.status(201).json(corrective))
        .catch((err) => res.status(500).json(err));
}

module.exports = {
    index,
    create
}