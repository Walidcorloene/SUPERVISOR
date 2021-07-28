const sequelize = require('index.js').sequelize;
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('effectuer', {
    IngenieurIdIngenieur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PreventiveIdPreventive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_debut_intervention: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_fin_intervention: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'effectuer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IngenieurIdIngenieur" },
          { name: "PreventiveIdPreventive" },
        ]
      },
      {
        name: "PreventiveIdPreventive",
        using: "BTREE",
        fields: [
          { name: "PreventiveIdPreventive" },
        ]
      },
    ]
  });
};
