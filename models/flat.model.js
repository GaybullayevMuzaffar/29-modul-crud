const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Flat = sequelize.define(
  "flat",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    etaj: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "flat",
  }
);

module.exports = Flat;