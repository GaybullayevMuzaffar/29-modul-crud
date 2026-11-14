const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Event = sequelize.define("event",
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
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    finish_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    finish_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    event_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "event_type",
        key: "id",
      },
    },
    human_category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "human_category",
        key: "id",
      },
    },
    venue_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "venue",
        key: "id",
      },
    },
    lang_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: "lang",
        key: "id",
      },
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    tableName: "event",
  }
);

module.exports = Event;