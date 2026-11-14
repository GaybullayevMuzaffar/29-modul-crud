const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Lang = sequelize.define("Lang",
  {
    id: {
      type: DataTypes.SMALLINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "lang",
  }
);

module.exports = Lang;