const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Sector = sequelize.define(
  "sector",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    sector_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "sector",
  }
);

module.exports = Sector;