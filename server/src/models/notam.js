const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notam', {
    id_notam: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dateDebut: {
      type: DataTypes.DATE,
      allowNull: true
    },
    installation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cause: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    objetNotam: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    contenu: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CorrectiveIdCorrective: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ResponsableIdResponsable: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'notam',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_notam" },
        ]
      },
      {
        name: "CorrectiveIdCorrective",
        using: "BTREE",
        fields: [
          { name: "CorrectiveIdCorrective" },
        ]
      },
      {
        name: "ResponsableIdResponsable",
        using: "BTREE",
        fields: [
          { name: "ResponsableIdResponsable" },
        ]
      },
    ]
  });
};
