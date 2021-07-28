const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipement', {
    id_equipement: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    equipment_machine: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    atelier: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    etat_station: {
      type: DataTypes.ENUM('sans_restriction','avec_restriction','inutilisable'),
      allowNull: true
    },
    R_restriction: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    pieces_remplaces: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    operations_effectuees: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'equipement',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_equipement" },
        ]
      },
    ]
  });
};
