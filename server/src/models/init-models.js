var DataTypes = require("sequelize").DataTypes;
var _corrective = require("./corrective");
var _creer = require("./creer");
var _effectuer = require("./effectuer");
var _equipement = require("./equipement");
var _ingenieur = require("./ingenieur");
var _notam = require("./notam");
var _preventive = require("./preventive");
var _responsable = require("./responsable");

function initModels(sequelize) {
  var corrective = _corrective(sequelize, DataTypes);
  var creer = _creer(sequelize, DataTypes);
  var effectuer = _effectuer(sequelize, DataTypes);
  var equipement = _equipement(sequelize, DataTypes);
  var ingenieur = _ingenieur(sequelize, DataTypes);
  var notam = _notam(sequelize, DataTypes);
  var preventive = _preventive(sequelize, DataTypes);
  var responsable = _responsable(sequelize, DataTypes);


  return {
    corrective,
    creer,
    effectuer,
    equipement,
    ingenieur,
    notam,
    preventive,
    responsable,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
