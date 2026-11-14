
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const HumanCategory = sequelize.define("human_category",
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
    start_age: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    finish_age: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "gender",
        key: "id",
      },
    },
  },
  {
    tableName: "human_category",
  }
);

module.exports = HumanCategory;