const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const VenueTypes = sequelize.define(
  "venue_types",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    venueId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "venue",
        key: "id",
      },
    },
    typeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "type",
        key: "id",
      },
    },
  },
  {
    tableName: "venue_types",
  }
);

module.exports = VenueTypes;