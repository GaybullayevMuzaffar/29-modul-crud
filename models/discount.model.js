const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Discount = sequelize.define(
  "discount",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    discount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    finish_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "discount",
  }
);

module.exports = Discount;