const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Region = sequelize.define(
  "Region",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "region",
  }
);

module.exports = Region;