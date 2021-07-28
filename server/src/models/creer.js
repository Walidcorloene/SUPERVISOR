const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('creer', {
    IngenieurIdIngenieur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CorrectiveIdCorrective: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_debut_intervention: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dete_fin_intervention: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'creer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IngenieurIdIngenieur" },
          { name: "CorrectiveIdCorrective" },
        ]
      },
      {
        name: "CorrectiveIdCorrective",
        using: "BTREE",
        fields: [
          { name: "CorrectiveIdCorrective" },
        ]
      },
    ]
  });
};
