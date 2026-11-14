const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TicketStatus = sequelize.define(
  "ticket_status",
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
    tableName: "ticket_status",
  }
);

module.exports = TicketStatus;