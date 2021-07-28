const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('responsable', {
    id_responsable: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    loginR: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "loginR"
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    id_preventive: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'responsable',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_responsable" },
        ]
      },
      {
        name: "loginR",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "loginR" },
        ]
      },
    ]
  });
};
