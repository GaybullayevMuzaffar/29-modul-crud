const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Seat = sequelize.define(
  "seat",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    sector_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: "sector",
        key: "id",
      },
    },
    row_number: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    number: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "venue",
        key: "id",
      },
    },
    seat_type_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: "seat_type",
        key: "id",
      },
    },
    location_in_schema: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "seat",
  }
);

module.exports = Seat;