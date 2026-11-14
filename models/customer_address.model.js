const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CustomerAddress = sequelize.define(
  "customer_address",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "customer",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: "region",
        key: "id",
      },
    },
    district_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: "district",
        key: "id",
      },
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flat_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "flat",
        key: "id",
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    post_index: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "customer_address",
  }
);

module.exports = CustomerAddress;