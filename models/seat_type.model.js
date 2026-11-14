const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SeatType = sequelize.define("seat_type",
  {
    id: {
      type: DataTypes.SMALLINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "seat_type",
  }
);

module.exports = SeatType;