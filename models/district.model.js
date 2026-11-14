const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const District = sequelize.define("district",
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
    region_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "region",
        key: "id",
      },
    },
  },
  {
    tableName: "district",
  }
);

module.exports = District;