const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");


const Profession = sequelize.define(
  "profession",
  {
    profession_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    profession_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    
    
  },
  {
    tableName: "profession",
    timestamps: false,
  },
);



module.exports = { Profession };
