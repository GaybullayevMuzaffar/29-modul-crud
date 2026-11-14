const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const VenuePhoto = sequelize.define("venue_photo",
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
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "venue_photo",
  }
);

module.exports = VenuePhoto;