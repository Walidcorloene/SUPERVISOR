const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preventive', {
    id_preventive: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    outillage_documentation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    anomalie_constatee_reparee: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    travaux_effectues: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nom_technicien: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    ResponsableIdResponsable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EquipementIdEquipement: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'preventive',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_preventive" },
        ]
      },
      {
        name: "ResponsableIdResponsable",
        using: "BTREE",
        fields: [
          { name: "ResponsableIdResponsable" },
        ]
      },
      {
        name: "EquipementIdEquipement",
        using: "BTREE",
        fields: [
          { name: "EquipementIdEquipement" },
        ]
      },
    ]
  });
};
