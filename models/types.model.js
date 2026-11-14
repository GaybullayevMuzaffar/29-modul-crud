const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Types = sequelize.define(
  "types",
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
    tableName: "type",
  }
);

module.exports = Types;