const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define(
  "booking",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    cart_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "cart",
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    payment_method_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: "payment_method",
        key: "id",
      },
    },
    delivery_method_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: "delivery_method",
        key: "id",
      },
    },
    discount_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: "discount",
        key: "id",
      },
    },
    status_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  },
  {
    tableName: "booking",
  }
);

module.exports = Booking;