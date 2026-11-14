const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Country = sequelize.define("Country", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  country_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  tableName: "country",
});

module.exports = Country;