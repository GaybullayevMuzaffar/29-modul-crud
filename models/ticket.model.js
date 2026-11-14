const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Ticket = sequelize.define(
  "ticket",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "event",
        key: "id",
      },
    },
    seat_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "seat",
        key: "id",
      },
    },
    price: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
    },
    service_fee: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      defaultValue: 0,
    },
    status_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: "ticket_status",
        key: "id",
      },
    },
    ticket_type_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: "ticket_type",
        key: "id",
      },
    },
  },
  {
    tableName: "ticket",
  }
);

module.exports = Ticket;