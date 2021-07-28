var sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('corrective', {
    id_corrective: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    anomalies_constatees: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ref_manip: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nom_technicien: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    EquipementIdEquipement: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'corrective',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_corrective" },
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
