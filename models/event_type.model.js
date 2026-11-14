const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const EventType = sequelize.define("event_type",
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
    parent_event_type_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: "event_type",
        key: "id",
      },
    },
  },
  {
    tableName: "event_type",
  }
);

module.exports = EventType;