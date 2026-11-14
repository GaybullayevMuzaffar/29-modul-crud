const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TicketType = sequelize.define(
  "ticket_type",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "ticket_type",
  }
);

module.exports = TicketType;