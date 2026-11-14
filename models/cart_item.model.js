const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CartItem = sequelize.define(
  "cart_item",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "ticket",
        key: "id",
      },
    },
    cart_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "cart",
        key: "id",
      },
    },
  },
  {
    tableName: "cart_item",
  }
);

module.exports = CartItem;