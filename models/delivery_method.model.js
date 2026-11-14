const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const DeliveryMethod = sequelize.define(
  "delivery_method",
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
    tableName: "delivery_method",
  }
);

module.exports = DeliveryMethod;