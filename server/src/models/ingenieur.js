const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingenieur', {
    id_ingenieur: {
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
    loginI: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "loginI"
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ingenieur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ingenieur" },
        ]
      },
      {
        name: "loginI",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "loginI" },
        ]
      },
    ]
  });
};
