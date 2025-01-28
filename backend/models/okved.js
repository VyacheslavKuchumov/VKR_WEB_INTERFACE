const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");


const Okved = sequelize.define(
  "okved",
  {
    okved_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: DataTypes.TEXT,
      unique: true,
    },
    okved_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
    
    
  },
  {
    tableName: "okved",
    timestamps: false,
  },
);



module.exports = { Okved };
